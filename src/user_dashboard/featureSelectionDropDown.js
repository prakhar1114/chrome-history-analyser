function renderFeatureDropdown(widgetHeader, featureSelectionCallback) { 
    // Create Dropdown Container
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'dropdown';

    // Create Dropdown Button
    const dropdownButton = document.createElement('button');
    dropdownButton.className = 'dropdown-button';
    dropdownButton.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    dropdownContainer.appendChild(dropdownButton);

    // Create Dropdown Menu
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-content';

    const features = [
        "Detailed Summary",
        "Brief Summary",
        "What did I learn?",
        "Tell me a joke about something from my history",
        "Interesting thing from my history"
    ];

    features.forEach(feature => {
        const menuItem = document.createElement('a');
        menuItem.href = '#';
        menuItem.textContent = feature;
        menuItem.addEventListener('click', async (e) => {
            e.preventDefault();
            // Update selectedFeature in Chrome storage
            await chrome.storage.local.set({ selectedFeature: feature }, () => {
                console.log(`Selected Feature set to: ${feature}`);
            });
            // Update state.selectedFeature and rerun addOrUpdateBasicSummaryWidget
            // state.selectedFeature = feature;
            // addOrUpdateBasicSummaryWidget(state.startDate, state.endDate, state.summaryAbortController ? state.summaryAbortController.signal : null);

            // run callback
            featureSelectionCallback(feature);

            // Close the dropdown
            dropdownMenu.style.display = 'none';

            // update widget header text
            widgetHeader.querySelector('h2').textContent = feature;
        });
        dropdownMenu.appendChild(menuItem);
    });

    dropdownContainer.appendChild(dropdownMenu);
    widgetHeader.appendChild(dropdownContainer);

    // Event Listener to Toggle Dropdown
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (!dropdownContainer.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
}

export { renderFeatureDropdown };