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


  function createOrGetWidget(uniqueID, widgetTitle) {
    if (document.getElementById(uniqueID)) {
      return document.getElementById(uniqueID);
    }
  
    const widgetContainer = document.querySelector('.widget-container');
  
    // Create a new widget element
    const newWidget = document.createElement('div');
    newWidget.className = 'widget resizable';
  
    // Generate a unique ID for the new widget
    newWidget.id = uniqueID;
  
    // Set the content of the new widget
    newWidget.innerHTML = `
        <div class="widget-header">
            <h2>${widgetTitle}</h2>
            <div class="resize-handle"></div>
        </div>
    `;
  
    // Append the new widget to the widget container
    widgetContainer.appendChild(newWidget);
  
    return newWidget;
  }

export { enableResizing, saveWidgetSize, loadWidgetSize, createOrGetWidget };
  