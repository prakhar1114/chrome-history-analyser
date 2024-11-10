import { getSearchResults } from '../utils/search.js';
import './popup-styles.css';

document.addEventListener('DOMContentLoaded', async () => {

  document.getElementById('indexOldDataBtn').addEventListener('click', () => {
    // Send message to background script to index old data
    chrome.runtime.sendMessage({ action: 'indexOldData' }, (response) => {
      console.log(response.status);
      alert('Indexing old data started. This may take a while.');
    });
  });

  document.getElementById('refreshBtn').addEventListener('click', () => {
    // Send message to background script to index old data
    chrome.runtime.sendMessage({ action: 'refreshIndexPercentage' }, (response) => {
      console.log(response.status);
      setIndexPercentage();
    });
  });

  document.getElementById('continueIndexing').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'continueIndexing' }, (response) => {
      console.log(response.status);
      alert('Indexing old data continued.');
    });
  });

  document.getElementById('searchBtn').addEventListener('click', async () => {

    const raw_query = document.getElementById('searchInput').value;
    const results = await getSearchResults(raw_query);
    displayResults(results);
  });

  document.getElementById("showDashboardBtn").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "displaySummary" });
  });

  // fetch index percentage
  setIndexPercentage();
  
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

  results.forEach((result_object) => {
    const item = result_object.item;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'result-item';

    const title = document.createElement('a');
    title.href = item.url;
    title.textContent = item.title || item.url;
    title.target = '_blank';

    const tags = document.createElement('p');
    tags.textContent = `Tags: ${Array.isArray(item.tags) && item.tags.length > 0 ? item.tags.join(', ') : 'None'}`;

    // TODO: fix when summary implemented
    // const summary = document.createElement('p');
    // summary.textContent = `Summary: ${item.summary}`;

    itemDiv.appendChild(title);
    itemDiv.appendChild(tags);
    // itemDiv.appendChild(summary);

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

function setIndexPercentage() {
  chrome.storage.local.get('indexPercentage', (result) => {
    document.getElementById('indexPercentage').textContent = `Indexed ${result.indexPercentage}% of history`;
  });
}