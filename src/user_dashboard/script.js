import { summarize } from '../ai/summarizer.js';
import { getHistoryWithTopNStats } from './history.js';
import { enableResizing, createOrGetWidget } from './widgets.js';
import { extractDomain, markdownToHtml, cleanInput } from './utils.js';
import './styles.css';
let startDate, endDate;


document.addEventListener('DOMContentLoaded', async () => {
    addDateRangeButtons();
    addRefreshButton();
    setDateRange('24h');
    addOrUpdateRecentHistoryWidget();
    addOrUpdateBasicSummaryWidget();
    enableResizing();
  
    document.getElementById('refresh-button').addEventListener('click', () => {
      loadContent();
    });

    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Optional: Save user preference using localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply saved theme on load
    window.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    });
  });

function addRefreshButton() {
  const refreshButton = document.createElement('button');
  refreshButton.id = 'refresh-button';
  refreshButton.textContent = 'Refresh';

  const container = document.querySelector('.date-range-container');
  container.appendChild(refreshButton);
}

  
/* Initialize Date Range Inputs */
function addDateRangeButtons() {
  
  const buttonData = [
      { label: 'Last 24 Hours', range: '24h' },
      { label: 'Last Week', range: '1w' },
      { label: 'Last Month', range: '1m' },
      { label: 'Last 3 Months', range: '3m' },
      { label: 'Last 6 Months', range: '6m' },
      // TODO: add month wise options in drop down
      { label: 'January', range: 'jan' },
      { label: 'February', range: 'feb' },
      { label: 'March', range: 'mar' }

  ];

  const container = document.querySelector('.date-range-container');

  buttonData.forEach(data => {
      const button = document.createElement('button');
      button.className = 'date-range-button';
      button.textContent = data.label;
      button.setAttribute('data-range', data.range);

      // Highlight the default selected button
      if (data.range === '24h') {
          button.classList.add('selected');
      }

      button.addEventListener('click', () => {
          setDateRange(data.range);
          loadContent();

          // Remove 'selected' class from all buttons
          document.querySelectorAll('.date-range-button').forEach(btn => {
              btn.classList.remove('selected');
          });

          // Add 'selected' class to the clicked button
          button.classList.add('selected');
      });

      container.appendChild(button);
  });
}


function setDateRange(range) {
  const today = new Date();

  switch (range) {
      case '24h':
          startDate = new Date(today);
          startDate.setDate(today.getDate() - 1);
          endDate = today;
          break;
      case '1w':
          startDate = new Date(today);
          startDate.setDate(today.getDate() - 7);
          endDate = today;
          break;
      case '1m':
          startDate = new Date(today);
          startDate.setMonth(today.getMonth() - 1);
          endDate = today;
          break;
      case '3m':
          startDate = new Date(today);
          startDate.setMonth(today.getMonth() - 3);
          endDate = today;
          break;
      case '6m':
          startDate = new Date(today);
          startDate.setMonth(today.getMonth() - 6);
          endDate = today;
          break;
      case 'jan':
          startDate = new Date(today.getFullYear(), 0, 1);
          endDate = new Date(today.getFullYear(), 1, 0);
          break;
      case 'feb':
          startDate = new Date(today.getFullYear(), 1, 1);
          endDate = new Date(today.getFullYear(), 2, 0);
          break;
      case 'mar':
          startDate = new Date(today.getFullYear(), 2, 1);
          endDate = new Date(today.getFullYear(), 3, 0);
          break;
      default:
          startDate = today;
          endDate = today;
  }

  const formatDate = (date) => {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
  };

  document.getElementById('display-start-date').textContent = formatDate(startDate);
  document.getElementById('display-end-date').textContent = formatDate(endDate);
}
  

  /* Add Overall Summary Widget */
async function addOrUpdateRecentHistoryWidget() {
  const newWidget = createOrGetWidget('recent-history', 'Recent History');

  // delete chidlren containing *contents*
  while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('recent-history-contents')) {
      newWidget.removeChild(newWidget.lastChild);
  }

  createRecentHistoryElement().then((widget) => {
      newWidget.appendChild(widget);
  });
}

async function addOrUpdateBasicSummaryWidget() {
  const newWidget = createOrGetWidget('basic-summary', 'Summary');

  // delete chidlren containing *contents*
  while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('contents')) {
      newWidget.removeChild(newWidget.lastChild);
  }

  await createBasicSummaryElement(newWidget);
}

/* Load Content Based on Date Range */
function loadContent() {
  addOrUpdateRecentHistoryWidget();
  addOrUpdateBasicSummaryWidget();
}

async function createRecentHistoryElement() {
  const topNHostnamesWithTitles = await getHistoryWithTopNStats(startDate, endDate, 10);
  const container = document.createElement('div');
  container.className = 'history-container';
  container.id = 'recent-history-contents';

  topNHostnamesWithTitles.forEach(item => {
    // Create the main box for each hostname
    const box = document.createElement('div');
    box.className = 'history-box';

    // First part: Hostname and hit count with an icon
    const header = document.createElement('div');
    header.className = 'history-header';

    const hostname = document.createElement('h3');
    // Add an icon before the hostname
    hostname.innerHTML = `<i class="fas fa-globe-americas"></i> ${item.hostname}`;

    const hitCount = document.createElement('p');
    hitCount.innerHTML = `<i class="fas fa-chart-line"></i> Hit Count: ${item.count}`;

    header.appendChild(hostname);
    header.appendChild(hitCount);

    // Second part: Titles with URLs
    const titlesContainer = document.createElement('div');
    titlesContainer.className = 'titles-container';

    const titlesList = document.createElement('ul');

    // Initial display count
    const initialDisplayCount = 10;
    const additionalLoadCount = 20;

    // Determine how many titles to show initially
    const displayedTitles = item.titles.slice(0, initialDisplayCount);
    displayedTitles.forEach(titleItem => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = titleItem.url;
      link.textContent = titleItem.title;
      link.target = '_blank';
      listItem.appendChild(link);
      titlesList.appendChild(listItem);
    });

    titlesContainer.appendChild(titlesList);

    // If there are more titles, add a "more" button
    if (item.titles.length > initialDisplayCount) {
      const moreButton = document.createElement('button');
      moreButton.className = 'more-button';
      moreButton.textContent = `and ${item.titles.length - initialDisplayCount} more...`;
      moreButton.dataset.hostname = item.hostname; // For identifying which box to expand

      moreButton.addEventListener('click', () => {
        loadMoreTitles(item, titlesList, moreButton, initialDisplayCount, additionalLoadCount);
      });

      titlesContainer.appendChild(moreButton);
    }

    // Assemble the box
    box.appendChild(header);
    box.appendChild(titlesContainer);
    container.appendChild(box);
  });

  return container;
}

async function createBasicSummaryElement(newWidget) {
  const topNHostnamesWithTitles = await getHistoryWithTopNStats(startDate, endDate, 10);
  const historyItems = topNHostnamesWithTitles.map(item => item.titles).flat();

  // append all history items to a single string
  const historyItemTitles = historyItems.map(item => item.title).join(',');

  // d

  // create chunks of 4000 characters
  const chunks = [];
  for (let i = 0; i < historyItemTitles.length; i += 2000) {
    chunks.push(historyItemTitles.slice(i, i + 2000));
  }

  // one by one summarize each chunk and append to the result
  for (const chunk of chunks) {
    console.log(`summarizing chunk ${chunk}`);
    let result = await summarize(cleanInput(chunk));

    let textElement = document.createElement('p');
    textElement.id = 'basic-summary-contents';

    textElement.innerHTML = markdownToHtml(result);
    newWidget.appendChild(textElement);
  }
}

function loadMoreTitles(item, titlesList, moreButton, initialCount, loadCount) {
  // Determine the current number of titles displayed
  const currentCount = titlesList.querySelectorAll('li').length;
  const nextCount = currentCount + loadCount;
  const titlesToAdd = item.titles.slice(currentCount, nextCount);

  titlesToAdd.forEach(titleItem => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = titleItem.url;
    link.textContent = titleItem.title;
    link.target = '_blank';
    listItem.appendChild(link);
    titlesList.appendChild(listItem);
  });

  // Update the remaining count
  const remaining = item.titles.length - nextCount;

  if (remaining > 0) {
    moreButton.textContent = `and ${remaining} more...`;
  } else {
    // Remove the "more" button if no more titles are left
    moreButton.remove();
  }
}
