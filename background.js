// Include the database functions
importScripts('db.js');
importScripts('ai/tags.js');
// import { getTags } from './ai/tags.js';

// Placeholder functions for generating tags and summaries
async function generateTags(title, url) {
  // Placeholder: extract keywords from title
  const tags = await getTags2(url, title);
  return tags;
}

async function multiGenerateTagAndStore(historyItems) {
    const batchsize = 8;
    for (let i = 0; i < historyItems.length; i += batchsize) {
        console.log(`Processing batch ${Math.floor(i / batchsize) + 1}`);
        const batch = historyItems.slice(i, i + batchsize);
        await Promise.all(batch.map(generateTagAndStore));
    }

    // for (let i = 0; i < historyItems.length; i += 1) {
    //     console.log(`Processing ${i}`);
    //     await generateTagAndStore(historyItems[i]);
    // }

}

async function generateTagAndStore(historyItem) {
    // Check if the item already exists
    const index = db.transaction(['history'], 'readonly').objectStore('history').index('lastVisitTime');
    const request = index.get(historyItem.lastVisitTime);
    request.onsuccess = (event) => {
        if (event.target.result) {
            console.log(`Item already exists: ${historyItem.id}`);
            return;
        }
    }
    let tags;
    try {
        tags = await generateTags(historyItem.title, historyItem.url);
    } catch (error) {
        console.error('Error generating tags:', error, `for ${historyItem.id} ${historyItem.url}`);
        return;
    }
     
    historyItem.tags = tags;

    // TODO: generate summary
    historyItem.summary = "";

    // await openDatabase();
    addHistoryItem(historyItem);
    return;
}

function generateSummary(content) {
  // Placeholder: summarize content
  return content ? content.substring(0, 200) + '...' : '';
}

// Function to index old data
async function indexOldData() {
  try {
    // Ensure the database is open
    await openDatabase();

    // Optional: Clear existing data if needed
    await clearDatabase();

    // Fetch all history items
    const historyItems = await new Promise((resolve, reject) => {
      chrome.history.search({
        text: '',
        startTime: 0, // From the beginning
        maxResults: 0 // Unlimited
      }, (items) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(items);
        }
      });
    });

    // Process and store history items
    await multiGenerateTagAndStore(historyItems);
    console.log('Indexing of old data completed successfully.');
  } catch (error) {
    console.error('Error indexing old data:', error);
  }
}

function continueIndexing() {
    console.log("continue indexing");

  // Clear existing database
  openDatabase().then(() => {
    // Fetch all history items
    chrome.history.search({
      text: '',
      startTime: 0, // From the beginning
      maxResults: 0 // Unlimited
    }, async (historyItems) => {
      await multiGenerateTagAndStore(historyItems);
    }).catch(error => {
      console.error('Error indexing old data:', error);
    });
  });


}

// New: Listen for new history entries
chrome.history.onVisited.addListener(async (historyItem) => {
  try {
    const { url, title, lastVisitTime } = historyItem;

    // Generate tags for the new history entry
    const tags = await generateTags(title || '', url);

    // TODO: generate summary
    const summary = "";

    // Create history entry object
    const newHistoryEntry = {
      id: `history-${lastVisitTime}`, // Unique ID based on lastVisitTime
      url: url,
      title: title,
      lastVisitTime: lastVisitTime,
      tags: tags,
      summary: summary
    };

    // Add to database
    await openDatabase();
    await addHistoryItem(newHistoryEntry);
    console.log('New history item indexed:', newHistoryEntry.id);

  } catch (error) {
    console.error('Error indexing new history item:', error);
  }
});

function getTotalHistoryCount() {
    return new Promise((resolve, reject) => {
        chrome.history.search({
            text: '',
            startTime: 0, // From the beginning of history
            maxResults: 0 // 0 will fetch all history items
        }, (historyItems) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(historyItems.length);
            }
        });
    });
}

// Function to get the count of indexed history items from IndexedDB
function getIndexedHistoryCount() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['history'], 'readonly');
        const objectStore = transaction.objectStore('history');
        const countRequest = objectStore.count();

        countRequest.onsuccess = () => {
            resolve(countRequest.result);
        };

        countRequest.onerror = () => {
            reject(countRequest.error);
        };
    });
}

async function updateIndexPercentage() {
    try {
        // Ensure the database is open
        await openDatabase();

        // Get total and indexed counts
        const [totalCount, indexedCount] = await Promise.all([
            getTotalHistoryCount(),
            getIndexedHistoryCount()
        ]);

        // Calculate percentage
        const percentage = totalCount > 0 ? ((indexedCount / totalCount) * 100).toFixed(2) : '0.00';

        // Update the percentage in Chrome storage
        chrome.storage.local.set({ indexPercentage: percentage }, () => {
            if (chrome.runtime.lastError) {
                console.error('Error setting index percentage:', chrome.runtime.lastError);
            } else {
                console.log(`Indexed ${percentage}% of history`);
            }
        });
    } catch (error) {
        console.error('Error updating index percentage:', error);
    }
}


// Expose indexOldData function to popup.js via message passing
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'indexOldData') {
    indexOldData().then(() => {
      sendResponse({ status: 'Indexing completed' });
    }).catch(error => {
      sendResponse({ status: 'Error', message: error.message });
    });
    return true; // Indicates that the response is asynchronous
  } else if (request.action === 'displaySummary') {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
  } else if (request.action === 'continueIndexing') {
    continueIndexing();
    sendResponse({ status: 'Indexing continued' });
  }
});
updateIndexPercentage();