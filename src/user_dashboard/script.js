import { getHistoryWithTopNStats } from './history.js';
import { createOrGetWidget, adjustWidgetSize, initializeMasonry } from './widgets.js';
import { renderFeatureDropdown } from './featureSelectionDropDown.js';
import { createBasicSummaryElement, createBriefSummaryElement, createWriteAboutHistoryElement, createUsingPromptAPI } from './summaryFeatures.js';
import { addOrUpdateWordCloudWidget, getWordDistribution } from './wordcloud.js';
import { featureObjects } from './featureLibrary.js';
import './styles.css';

const state = {
    startDate: null,
    endDate: null,
    selectedFilters: [],
    tempSelectedFilters: null,
    excludeFilters: [],
    enableBasicSummary: true,
    enableWordCloud: true,
    summaryAbortController: null,
    selectedFeature: featureObjects[0],
}

document.addEventListener('DOMContentLoaded', async () => {
    const defaultDateRange = '1w';

    addDateRangeButtons(defaultDateRange);
    addRefreshButton();
    let { startDate, endDate } = setDateRange(defaultDateRange, state);

    // Initialize category and exclude filters
    await initializeFilters();
    const selectedFeature = await getSelectedFeature();
    if (selectedFeature) {
        state.selectedFeature = selectedFeature;
    }
    initializeMasonry();
    await loadContent();
    // enableResizing();
  
    document.getElementById('refresh-button').addEventListener('click', async () => {
      await handleWordDeselectReset();
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
/* Event listener for adding new category filter */
document.getElementById('add-filter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('new-filter-input');
    const newFilter = input.value.trim();
    if (newFilter && !state.selectedFilters.includes(newFilter)) {
        // Create toggle button
        createToggleButton(newFilter, false, 'category-filters');

        // Save to custom filters
        const customFilters = await getCustomFilters();
        customFilters.push(newFilter);
        saveCustomFilters(customFilters);

        input.value = '';
    }
});

/* Event listener for adding new exclude filter */
document.getElementById('add-exclude-filter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('new-exclude-filter-input');
    const newExcludeFilter = input.value.trim();
    if (newExcludeFilter && !state.excludeFilters.includes(newExcludeFilter)) {
        // Create toggle button
        createToggleButton(newExcludeFilter, false, 'exclude-filters');

        // Save to custom exclude filters
        const customExcludeFilters = await getCustomExcludeFilters();
        customExcludeFilters.push(newExcludeFilter);
        saveCustomExcludeFilters(customExcludeFilters);

        input.value = '';
    }
});


function addRefreshButton() {
  const refreshButton = document.createElement('button');
  refreshButton.id = 'refresh-button';
  refreshButton.textContent = 'Refresh';

  const container = document.querySelector('.date-range-container');
  container.appendChild(refreshButton);
}

/* Initialize Date Range Inputs */
function addDateRangeButtons(defaultDateRange) {
  
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
      if (data.range === defaultDateRange) {
          button.classList.add('selected');
      }

      button.addEventListener('click', () => {
          setDateRange(data.range, state);
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

function setDateRange(range, state) {
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
      case 'feb':
      case 'mar':
          const monthMap = { jan: 0, feb: 1, mar: 2 };
          startDate = new Date(today.getFullYear(), monthMap[range], 1);
          endDate = new Date(today.getFullYear(), monthMap[range] + 1, 0);
          break;
      default:
          startDate = new Date(today);
          endDate = today;
  }

  // Update display dates
  document.getElementById('display-start-date').textContent = startDate.toLocaleDateString();
  document.getElementById('display-end-date').textContent = endDate.toLocaleDateString();

  state.startDate = startDate;
  state.endDate = endDate;
  return { startDate, endDate };
}

/* Add Overall Summary Widget */
async function addOrUpdateRecentHistoryWidget(startDate, endDate) {
  const newWidget = createOrGetWidget('recent-history', 'Recent History');

  // delete children containing *recent-history-contents*
  while (newWidget.lastChild && newWidget.lastChild.id && newWidget.lastChild.id.includes('recent-history-contents')) {
      newWidget.removeChild(newWidget.lastChild);
  }

  createRecentHistoryElement(startDate, endDate).then((widget) => {
      newWidget.appendChild(widget);
      // adjust size of newWidget
      console.log('adjusting size of newWidget');
      adjustWidgetSize(newWidget, ['.widget-header', '.history-container'], 50);
  });
}

async function addOrUpdateBasicSummaryWidget(startDate, endDate, signal) {
  const newWidget = createOrGetWidget('basic-summary', state.selectedFeature.feature);

  // fetch widget-header and add a drop down menu with buttons with callbacks to update state.selectedFeature
  const widgetHeader = newWidget.querySelector('.widget-header');
  if (widgetHeader.querySelector('.dropdown') === null) {
    renderFeatureDropdown(widgetHeader, loadRequestedFeature);
  }

  // delete children containing *contents*
  while (newWidget.lastChild && newWidget.lastChild.className && newWidget.lastChild.className.includes('contents')) {
      newWidget.removeChild(newWidget.lastChild);
  }

  const { topNHostnamesWithTitles } = await getHistoryWithTopNStats(startDate, endDate, 50, state.selectedFilters, state.excludeFilters);


  if (state.selectedFeature.feature === "Detailed Summary") {
    await createBasicSummaryElement(newWidget, topNHostnamesWithTitles, state.selectedFeature.context, signal);
  } else {
    if (state.selectedFeature.model === 'summarizer') {
      await createBriefSummaryElement(newWidget, topNHostnamesWithTitles, state.selectedFeature.context, signal);
    } else if (state.selectedFeature.model === 'writer') {
      await createWriteAboutHistoryElement(newWidget, topNHostnamesWithTitles, state.selectedFeature.context, state.selectedFeature.seed_prompt, signal);
    } else if (state.selectedFeature.model === 'prompt') {
      await createUsingPromptAPI(newWidget, topNHostnamesWithTitles, state.selectedFeature.context, state.selectedFeature.seed_prompt, signal);
    }
  }
}

/* Load Content Based on Date Range */
async function loadContent(rerenderWordCloud = true, rerenderRecentHistory = true, rerenderAIFeature = true) {
  console.log('Selected Filters:', state.selectedFilters);
  console.log('Exclude Filters:', state.excludeFilters);
  
  // Abort any ongoing summarization
  if (state.summaryAbortController) {
    state.summaryAbortController.abort();
    console.log('Previous summarization aborted.');
  }

  // Create a new AbortController for the current operation
  state.summaryAbortController = new AbortController();
  const { signal } = state.summaryAbortController;

  if (state.enableWordCloud && rerenderWordCloud) {
    const wordDistribution = await getWordDistribution(state.startDate, state.endDate, state.selectedFilters, state.excludeFilters);
    addOrUpdateWordCloudWidget(wordDistribution, handleWordSelect, handleWordDeselect);
  }

  if (rerenderRecentHistory) {
    addOrUpdateRecentHistoryWidget(state.startDate, state.endDate);
  }

  if (state.enableBasicSummary && rerenderAIFeature) {
    addOrUpdateBasicSummaryWidget(state.startDate, state.endDate, signal);
  }
}

function loadRequestedFeature(featureObject) {
    state.selectedFeature = featureObject;
    saveSelectedFeature();
    loadContent(false, false, true);
}

async function createRecentHistoryElement(startDate, endDate) {
  const { topNHostnamesWithTitles } = await getHistoryWithTopNStats(startDate, endDate, 10, state.selectedFilters, state.excludeFilters);
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

/* Initialize Filters (Tag Filters and Exclude Tags) */
async function initializeFilters() {
    await initializeCategoryFilters();
    await initializeExcludeFilters();
}

/* Initialize Tag Filters */
async function initializeCategoryFilters() {
    const defaultFilters = ['Code', 'Productivity', 'AI', 'Entertainment', 'Social'];
    const customFilters = await getCustomFilters();

    const allFilters = [...defaultFilters, ...customFilters];

    allFilters.forEach(filter => {
        createToggleButton(filter, false, 'category-filters');
    });

    // Load selected filters from storage
    state.selectedFilters = await getSelectedFilters();
    updateFilterStates('category-filters');
}

/* Initialize Exclude Filters */
async function initializeExcludeFilters() {
    const customExcludeFilters = await getCustomExcludeFilters();

    customExcludeFilters.forEach(filter => {
        createToggleButton(filter, false, 'exclude-filters');
    });

    // Load selected exclude filters from storage
    state.excludeFilters = await getSelectedExcludeFilters();
    updateFilterStates('exclude-filters');
}

/* Functions for Category Filters */

/* Function to get custom filters from Chrome storage */
function getCustomFilters() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['customFilters'], (result) => {
            resolve(result.customFilters || []);
        });
    });
}

/* Function to get selected filters from Chrome storage */
function getSelectedFilters() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['selectedFilters'], (result) => {
            resolve(result.selectedFilters || []);
        });
    });
}

function getSelectedFeature() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['selectedFeature'], (result) => {
            resolve(result.selectedFeature || null);
        });
    });    
}

function saveSelectedFeature() {
    chrome.storage.local.set({ selectedFeature: state.selectedFeature }, () => {
        console.log('Selected feature saved:', state.selectedFeature);
    });
}

/* Function to save selected filters to Chrome storage */
function saveSelectedFilters() {
    chrome.storage.local.set({ selectedFilters: state.selectedFilters }, () => {
        console.log('Selected filters saved:', state.selectedFilters);
    });
}

/* Function to save custom filters to Chrome storage */
function saveCustomFilters(customFilters) {
    chrome.storage.local.set({ customFilters }, () => {
        console.log('Custom filters saved:', customFilters);
    });
}

/* Functions for Exclude Filters */

/* Function to get custom exclude filters from Chrome storage */
function getCustomExcludeFilters() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['customExcludeFilters'], (result) => {
            resolve(result.customExcludeFilters || []);
        });
    });
}

/* Function to get selected exclude filters from Chrome storage */
function getSelectedExcludeFilters() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['selectedExcludeFilters'], (result) => {
            resolve(result.selectedExcludeFilters || []);
        });
    });
}

/* Function to save selected exclude filters to Chrome storage */
function saveSelectedExcludeFilters() {
    chrome.storage.local.set({ selectedExcludeFilters: state.excludeFilters }, () => {
        console.log('Selected exclude filters saved:', state.excludeFilters);
    });
}

/* Function to save custom exclude filters to Chrome storage */
function saveCustomExcludeFilters(customExcludeFilters) {
    chrome.storage.local.set({ customExcludeFilters }, () => {
        console.log('Custom exclude filters saved:', customExcludeFilters);
    });
}

/* Function to create a toggle button */
function createToggleButton(label, isDefault = false, filterType = 'category-filters') {
    const containerId = filterType === 'exclude-filters' ? 'exclude-filters' : 'category-filters';
    const container = document.getElementById(containerId);

    const button = document.createElement('button');
    button.className = 'category-toggle-button';
    button.textContent = label;
    button.dataset.label = label;
    button.dataset.default = isDefault;

    // Add 'custom' class if it's not a default filter
    if (!isDefault) {
        button.classList.add('custom');

        // Create the remove (X) button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '✕';
        removeBtn.title = 'Remove filter';

        // Event listener for removing the filter
        removeBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            await removeFilter(label, filterType);
        });

        button.appendChild(removeBtn);
    }

    // Set initial state based on selected filters
    if (filterType === 'exclude-filters') {
        if (state.excludeFilters.includes(label)) {
            button.classList.add('active');
        }
    } else {
        if (state.selectedFilters.includes(label)) {
            button.classList.add('active');
        }
    }

    // Event listener for toggling active state
    button.addEventListener('click', () => {
        if (filterType === 'exclude-filters') {
            const index = state.excludeFilters.indexOf(label);
            if (index > -1) {
                state.excludeFilters.splice(index, 1);
                button.classList.remove('active');
            } else {
                state.excludeFilters.push(label);
                button.classList.add('active');
            }
            saveSelectedExcludeFilters();
        } else {
            if (state.tempSelectedFilters === null) {
                const index = state.selectedFilters.indexOf(label);
                if (index > -1) {
                    state.selectedFilters.splice(index, 1);
                    button.classList.remove('active');
                } else {
                    state.selectedFilters.push(label);
                    button.classList.add('active');
                }
                saveSelectedFilters();
            } else {
                state.selectedFilters = state.tempSelectedFilters;
                state.tempSelectedFilters = null;
            }
        }
        loadContent();
    });

    container.appendChild(button);
}

/* Function to remove a custom filter */
async function removeFilter(label, filterType) {
    if (filterType === 'exclude-filters') {
        // Remove from excludeFilters if present
        const index = state.excludeFilters.indexOf(label);
        if (index > -1) {
            state.excludeFilters.splice(index, 1);
            saveSelectedExcludeFilters();
        }

        // Remove from customExcludeFilters in storage
        const customExcludeFilters = await getCustomExcludeFilters();
        const filterIndex = customExcludeFilters.indexOf(label);
        if (filterIndex > -1) {
            customExcludeFilters.splice(filterIndex, 1);
            saveCustomExcludeFilters(customExcludeFilters);
        }

        // Remove the button from the DOM
        const button = document.querySelector(`.category-toggle-button[data-label="${label}"]`);
        if (button) {
            button.remove();
        }
    } else {
        // Existing category filters removal
        // Remove from selectedFilters if present
        const index = state.selectedFilters.indexOf(label);
        if (index > -1) {
            state.selectedFilters.splice(index, 1);
            saveSelectedFilters();
        }

        // Remove from customFilters in storage
        const customFilters = await getCustomFilters();
        const filterIndex = customFilters.indexOf(label);
        if (filterIndex > -1) {
            customFilters.splice(filterIndex, 1);
            saveCustomFilters(customFilters);
        }

        // Remove the button from the DOM
        const button = document.querySelector(`.category-toggle-button[data-label="${label}"]`);
        if (button) {
            button.remove();
        }
    }
}

/* Function to update filter button states based on selectedFilters */
function updateFilterStates(filterType = 'category-filters') {
    let buttons;
    if (filterType === 'exclude-filters') {
        buttons = document.querySelectorAll('#exclude-filters .category-toggle-button');
        buttons.forEach(button => {
            const label = button.dataset.label;
            if (state.excludeFilters.includes(label)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    } else {
        buttons = document.querySelectorAll('#category-filters .category-toggle-button');
        buttons.forEach(button => {
            const label = button.dataset.label;
            if (state.selectedFilters.includes(label)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

/**
 * Handles the selection of a word from the word cloud.
 * Adds the word to excludeFilters and updates the state.
 * @param {string} word - The word to exclude.
 */
function handleWordSelect(word) {
    if (state.tempSelectedFilters === null) {
        state.tempSelectedFilters = state.selectedFilters;
    }
    state.selectedFilters = [word];
    loadContent(false);
}

/**
 * Handles the deselection of a word from the word cloud.
 * Removes the word from excludeFilters and updates the state.
 * @param {string} word - The word to remove from exclusion.
 */
async function handleWordDeselect(word) {
    if (state.tempSelectedFilters) {
        state.selectedFilters = state.tempSelectedFilters;
        state.tempSelectedFilters = null;
        loadContent(false);
    }
}

async function handleWordDeselectReset() {
    if (state.tempSelectedFilters) {
        state.selectedFilters = state.tempSelectedFilters;
        state.tempSelectedFilters = null;
        loadContent(false);
    }

}