document.getElementById("log-history").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "logLatestHistory" });
  });