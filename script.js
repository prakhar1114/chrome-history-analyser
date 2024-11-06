document.addEventListener('DOMContentLoaded', () => {
    addDateRangeButtons();
    addRefreshButton();
    addOverallSummaryWidget();
    loadContent();
    enableResizing();
  
    document.getElementById('refresh-button').addEventListener('click', () => {
      loadContent();
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
        button.addEventListener('click', () => {
            setDateRange(data.range);
            loadContent();
        });
        container.appendChild(button);
    });
  }


  function setDateRange(range) {
    const today = new Date();
    let startDate, endDate;

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
  function addOverallSummaryWidget() {
    const widgetContainer = document.querySelector('.widget-container');

    // Create a new widget element
    const newWidget = document.createElement('div');
    newWidget.className = 'widget resizable';


    // add a condition to check if the widget already exists
    // Generate a unique ID for the new widget
    const uniqueId = `overall summary`;
    newWidget.id = uniqueId;

    // Set the content of the new widget
    newWidget.innerHTML = `
        <div class="widget-header">
            <h2>New Widget</h2>
            <div class="resize-handle"></div>
        </div>
        <div class="widget-content">
            <p>Some random content</p>
        </div>
    `;

    // Append the new widget to the widget container
    widgetContainer.appendChild(newWidget);

    createRecentHistoryWidget().then((widget) => {
        newWidget.appendChild(widget);
    });

  }

  /* Load Content Based on Date Range */
  function loadContent() {
    const startDate = document.getElementById('display-start-date').textContent;
    const endDate = document.getElementById('display-end-date').textContent;

  }
  
  /* Enable Resizing */
  function enableResizing() {
    const resizableElements = document.querySelectorAll('.resizable');
  
    resizableElements.forEach(element => {
      const resizeHandle = element.querySelector('.resize-handle');
      let isResizing = false;
  
      resizeHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isResizing = true;
        document.body.style.cursor = 'se-resize';
        element.classList.add('resizing');
  
        const startWidth = element.offsetWidth;
        const startHeight = element.offsetHeight;
        const startX = e.clientX;
        const startY = e.clientY;
  
        const onMouseMove = (e) => {
          if (!isResizing) return;
  
          const currentWidth = startWidth + (e.clientX - startX);
          const currentHeight = startHeight + (e.clientY - startY);
  
          // Set minimum dimensions
          const minWidth = 200;
          const minHeight = 100;
  
          element.style.width = `${Math.max(currentWidth, minWidth)}px`;
          element.style.height = `${Math.max(currentHeight, minHeight)}px`;
        };
  
        const onMouseUp = () => {
          isResizing = false;
          document.body.style.cursor = 'default';
          element.classList.remove('resizing');
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
  
          // Save dimensions
          saveWidgetSize(element.id, element.style.width, element.style.height);
        };
  
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
  
      // Load saved dimensions
      loadWidgetSize(element.id, element);
    });
  }
  
  /* Save Widget Size */
  function saveWidgetSize(widgetId, width, height) {
    const size = { width, height };
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ [widgetId]: size }, () => {
        console.log(`Saved size for ${widgetId}:`, size);
      });
    } else {
      // For testing outside of Chrome extension
      localStorage.setItem(widgetId, JSON.stringify(size));
    }
  }
  
  /* Load Widget Size */
  function loadWidgetSize(widgetId, element) {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(widgetId, (result) => {
        if (result[widgetId]) {
          element.style.width = result[widgetId].width;
          element.style.height = result[widgetId].height;
        }
      });
    } else {
      // For testing outside of Chrome extension
      const size = JSON.parse(localStorage.getItem(widgetId));
      if (size) {
        element.style.width = size.width;
        element.style.height = size.height;
      }
    }
  }

  function getHistory() {
    return new Promise((resolve, reject) => {
      chrome.history.search({ text: '', maxResults: 5 }, (results) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          console.log(results);
          resolve(results);
        }
      });
    });
  }

  function createRecentHistoryWidget() {
    // get history from getHistory function and create a widget with the history items
    return getHistory().then((historyItems) => {
      const list = document.createElement('ul');
      historyItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.title || item.url}</a>`;
        list.appendChild(li);
      });
      return list;
    });

  }
