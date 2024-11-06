// background.js

// Function to get the latest history items and create a new HTML page
function logLatestHistory() {
    chrome.history.search({ text: '', maxResults: 5 }, (results) => {
        let htmlContent = "<html><head><title>Latest History Items</title></head><body>";
        if (results.length > 0) {
            htmlContent += "<h1>Latest History Items:</h1><ul>";
            results.forEach((item, index) => {
                htmlContent += `<li>${index + 1}. ${item.title || 'No title'} - <a href="${item.url}" target="_blank">${item.url}</a></li>`;
            });
            htmlContent += "</ul>";
        } else {
            htmlContent += "<p>No history items found.</p>";
        }
        htmlContent += "</body></html>";

        // Create a data URL with the generated HTML content
        const dataUrl = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);
        chrome.tabs.create({ url: dataUrl });
    });
}

// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "logLatestHistory") {
        // logLatestHistory();
        chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
    }
});