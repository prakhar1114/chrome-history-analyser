import { clearDatabase, addHistoryItem, getAllHistoryItems, checkIfItemExists } from '../utils/db.js';
import { getTags } from '../ai/tags.js';

async function multiGenerateTagAndStore(historyItems) {
    const batchsize = 4;
    for (let i = 0; i < historyItems.length; i += batchsize) {
        console.log(`Processing batch ${Math.floor(i / batchsize) + 1}`);
        const batch = historyItems.slice(i, i + batchsize);
        await Promise.all(batch.map(generateTagAndStore));
    }
}

async function generateTagAndStore(historyItem) {
    // Check if the item already exists
    const alreadyExists = await checkIfItemExists(historyItem.lastVisitTime);
    if (alreadyExists) {
      return;
    }

    let tags;
    try {
        tags = await getTags(historyItem.title, historyItem.url);
    } catch (error) {
        // console.error('Error generating tags:', error, `for ${historyItem.id} ${historyItem.url}`);
        return;
    }
     
    historyItem.tags = tags;
    // TODO: generate summary
    historyItem.summary = "";

    await addHistoryItem(historyItem);
    return;
}

// Function to index old data
async function indexOldData() {
  // TODO: remove later: Clear existing data if needed
  await clearDatabase();

  // Fetch all history items
  continueIndexing();
  return;
}

function continueIndexing() {
    console.log("indexing now");

    // Fetch all history items
    chrome.history.search({
      text: '',
      startTime: 0, // From the beginning
      maxResults: 0 // Unlimited
    }, async (historyItems) => {
      await multiGenerateTagAndStore(historyItems);
      console.log('Indexing of old data completed successfully.');
    });
}

// New: Listen for new history entries
chrome.history.onVisited.addListener(async (historyItem) => {
  try {
    const { url, title, lastVisitTime } = historyItem;

    // Generate tags for the new history entry
    const tags = await getTags(title || '', url);

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
    await addHistoryItem(newHistoryEntry);
    console.log('New history item indexed');

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

async function updateIndexPercentage() {
    try {
        // Get total and indexed counts
        const [totalCount, indexedCount] = await Promise.all([
            getTotalHistoryCount(),
            getAllHistoryItems().then(items => items.length)
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
    chrome.tabs.create({ url: chrome.runtime.getURL("user_dashboard.html") });
  } else if (request.action === 'continueIndexing') {
    sendResponse({ status: 'Indexing continued' });
    continueIndexing();
  } else if (request.action === 'refreshIndexPercentage') {
    updateIndexPercentage().then(() => {
      sendResponse({ status: 'Refresh % updated' });
      }).catch(error => {
        sendResponse({ status: 'Error', message: error.message });
      });
      return true;
  }
});
updateIndexPercentage();