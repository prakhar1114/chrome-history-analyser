// db.js

let db;

export async function openDatabase() {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }
    const request = indexedDB.open('HistoryIndexerDB', 1);

    request.onerror = (event) => {
      console.error('Database error:', event.target.errorCode);
      reject(event.target.errorCode);
    };

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      const objectStore = db.createObjectStore('history', { keyPath: 'id' });
      objectStore.createIndex('url', 'url', { unique: false });
      objectStore.createIndex('title', 'title', { unique: false });
      objectStore.createIndex('tags', 'tags', { unique: false, multiEntry: true });
      objectStore.createIndex('summary', 'summary', { unique: false });
      objectStore.createIndex('lastVisitTime', 'lastVisitTime', { unique: true });
      console.log("Database upgraded");
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };
  });
}

export async function clearDatabase() {
  await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['history'], 'readwrite');
    const objectStore = transaction.objectStore('history');
    const request = objectStore.clear();
    console.log("Clearing database");

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };
  });
}

export async function addHistoryItem(item) {
  await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['history'], 'readwrite');
    const objectStore = transaction.objectStore('history');
    const index = objectStore.index('lastVisitTime');

    // Check if an item with the same lastVisitTime already exists
    const checkRequest = index.get(item.lastVisitTime);

    checkRequest.onsuccess = (event) => {
      if (event.target.result) {
        // Item with the same lastVisitTime already exists
        console.log("Item with the same lastVisitTime already exists, not adding.");
        resolve(); // Resolve without adding
      } else {
        // No item with the same lastVisitTime, proceed to add
        const request = objectStore.put(item);

        request.onsuccess = () => {
          console.log(`History item added`);
          resolve();
        };

        request.onerror = (event) => {
          console.error('Error adding item:', event.target.errorCode);
          reject(event.target.errorCode);
        };
      }
    };

    checkRequest.onerror = (event) => {
      console.error('Error checking lastVisitTime:', event.target.errorCode);
      reject(event.target.errorCode);
    };
  });
}

export async function getAllHistoryItems() {
  await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['history'], 'readonly');
    const objectStore = transaction.objectStore('history');
    const request = objectStore.getAll();

    request.onsuccess = (event) => {
      resolve(event.target.result);
      console.log("All history items fetched");
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
      console.error('Error fetching all history items:', event.target.errorCode);
    };
  });
}

/**
 * Checks if a history item with the specified lastVisitTime exists in the IndexedDB.
 * @param {number} lastVisitTime - The last visit time of the history item.
 * @returns {Promise<boolean>} - A promise that resolves to true if the item exists, false otherwise.
 */
export async function checkIfItemExists(lastVisitTime) {
  // Ensure the database is open
  await openDatabase();

  try {
    // Start a readonly transaction
    const transaction = db.transaction(['history'], 'readonly');
    const objectStore = transaction.objectStore('history');
    const index = objectStore.index('lastVisitTime');

    // Initiate the get request
    const request = index.get(lastVisitTime);

    // Await the result of the get request
    const result = await promisifyRequest(request);

    // Determine if the item exists
    const exists = result !== undefined && result !== null;

    // console.log(`Item exists for lastVisitTime ${lastVisitTime}: ${exists}`);

    return exists;
  } catch (error) {
    console.error(`Error checking if item exists for lastVisitTime ${lastVisitTime}:`, error);
    throw error; // Propagate the error to the caller
  }
}

/**
 * Promisifies an IndexedDB request.
 * @param {IDBRequest} request - The IndexedDB request object.
 * @returns {Promise<any>} - A promise that resolves with the request result.
 */
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Input startDate and endDate, fetch all history items in that range, search within lastVisitTime index of the db  
 */
export async function getHistoryInTimeRange(startDate, endDate) {
  await openDatabase();
  const transaction = db.transaction(['history'], 'readonly');
  const objectStore = transaction.objectStore('history');
  const index = objectStore.index('lastVisitTime');
  const range = IDBKeyRange.bound(startDate, endDate);
  const request = index.getAll(range);

  const result = await promisifyRequest(request);
  return result;
}