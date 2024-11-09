// db.js

let db;

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (db) {
      console.log("Database already open");
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
      console.log("Database opened");
    };
  });
}

function clearDatabase() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['history'], 'readwrite');
    const objectStore = transaction.objectStore('history');
    const request = objectStore.clear();

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };
  });
}

function addHistoryItem(item) {
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
          console.log(`History item added: ${item.id}`);
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

function getAllHistoryItems() {
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