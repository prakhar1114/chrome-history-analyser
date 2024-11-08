// Include the database functions
importScripts('db.js');

// Placeholder functions for generating tags and summaries
function generateTags(title, url) {
  // Placeholder: extract keywords from title
  return title.toLowerCase().split(' ').filter(word => word.length > 3);
}

function generateSummary(content) {
  // Placeholder: summarize content
  return content ? content.substring(0, 200) + '...' : '';
}

// Track the last indexed time
let lastIndexedTime = null;

// Load lastIndexedTime from chrome storage
chrome.storage.local.get(['lastIndexedTime'], (result) => {
  lastIndexedTime = result.lastIndexedTime || null;
});

// Function to index old data
function indexOldData() {
  // Update lastIndexedTime to null
  lastIndexedTime = null;
  chrome.storage.local.set({ lastIndexedTime: null });

  // Clear existing database
  openDatabase().then(() => {
    return clearDatabase();
  }).then(() => {
    // Fetch all history items
    chrome.history.search({
      text: '',
      startTime: 0, // From the beginning
      maxResults: 0 // Unlimited
    }, (historyItems) => {
      // Process each history item
      const promises = historyItems.map((item) => {
        const tags = generateTags(item.title || '', item.url);
        const summary = ''; // Placeholder, as per requirement

        // Prepare the item
        const historyEntry = {
          id: item.id,
          url: item.url,
          title: item.title,
          lastVisitTime: item.lastVisitTime,
          tags: tags,
          summary: summary
        };

        // Add to database
        return addHistoryItem(historyEntry);
      });

      // Wait for all items to be added
      Promise.all(promises).then(() => {
        console.log('Old data indexed successfully.');
        // Update lastIndexedTime to current time
        lastIndexedTime = Date.now();
        chrome.storage.local.set({ lastIndexedTime });
      }).catch((error) => {
        console.error('Error indexing old data:', error);
      });
    });
  });
}

// Real-time summary and tag generation
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    const content = tab.title + " " + tab.url;
    const summary = generateSummary(content);
    const tags = generateTags(tab.title || '', tab.url);

    // Create history item
    const historyEntry = {
    id: `tab-${tabId}-${Date.now()}`, // Unique ID
    url: tab.url,
    title: tab.title,
    lastVisitTime: Date.now(),
    tags: tags,
    summary: summary
    };

    // Add to database
    openDatabase().then(() => {
    return addHistoryItem(historyEntry);
    }).then(() => {
    console.log('Real-time data indexed for tab:', tabId);
    // Update lastIndexedTime
    lastIndexedTime = Date.now();
    chrome.storage.local.set({ lastIndexedTime });
    }).catch((error) => {
    console.error('Error indexing real-time data:', error);
    });
}});


// Expose indexOldData function to popup.js via message passing
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'indexOldData') {
    indexOldData();
    sendResponse({ status: 'Indexing started' });
  } else if (request.action === 'displaySummary') {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
  }
});