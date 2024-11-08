let loaded_db;

document.addEventListener('DOMContentLoaded', () => {
  openDatabase().then((database) => {
    loaded_db = database;
  });

  document.getElementById('indexOldDataBtn').addEventListener('click', () => {
    // Send message to background script to index old data
    chrome.runtime.sendMessage({ action: 'indexOldData' }, (response) => {
      console.log(response.status);
      alert('Indexing old data started. This may take a while.');
    });
  });

  document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (query === '') {
      alert('Please enter a search term.');
      return;
    }

    // Search the database
    const transaction = loaded_db.transaction(['history'], 'readonly');
    const objectStore = transaction.objectStore('history');

    const results = [];
    objectStore.openCursor().onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        const item = cursor.value;
        const matches = (
          (item.title && item.title.toLowerCase().includes(query)) ||
          (item.summary && item.summary.toLowerCase().includes(query)) ||
          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
        );
        if (matches) {
          results.push(item);
        }
        cursor.continue();
      } else {
        // Display results
        displayResults(results);
      }
    };
  });
});

function displayResults(results) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (results.length === 0) {
    resultsDiv.textContent = 'No results found.';
    return;
  }

  // Create a scrollable container
  const scrollableContainer = document.createElement('div');
  scrollableContainer.className = 'scrollable-container';

  results.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'result-item';

    const title = document.createElement('a');
    title.href = item.url;
    title.textContent = item.title || item.url;
    title.target = '_blank';

    const tags = document.createElement('p');
    tags.textContent = `Tags: ${item.tags.join(', ')}`;

    const summary = document.createElement('p');
    summary.textContent = `Summary: ${item.summary}`;

    itemDiv.appendChild(title);
    itemDiv.appendChild(tags);
    itemDiv.appendChild(summary);

    scrollableContainer.appendChild(itemDiv);
  });

  resultsDiv.appendChild(scrollableContainer);

  // Add event listener to condense the container and clear search input
  document.addEventListener('click', (event) => {
    if (!resultsDiv.contains(event.target)) {
      resultsDiv.innerHTML = ''; // Condense the container
      document.getElementById('searchInput').value = ''; // Clear the search input
    }
  });
}

document.getElementById("showDashboardBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "displaySummary" });
});
