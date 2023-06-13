// background.js



let extensionEnabled = true;

// Listen for messages from settings page
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.enabled !== undefined) {
    extensionEnabled = request.enabled;
    
    if (extensionEnabled) {
      // Extension is enabled
      enableExtension();
    } else {
      // Extension is disabled
      disableExtension();
    }
  }
});

// Function to enable the extension
function enableExtension() {
  // Add necessary actions when the extension is enabled
}

// Function to disable the extension
function disableExtension() {
  // Add necessary actions when the extension is disabled
}

// Initialize the extension
chrome.storage.sync.get("extensionEnabled", function (data) {
  const storedEnabledValue = data.extensionEnabled;
  extensionEnabled = storedEnabledValue !== undefined ? storedEnabledValue : true;

  if (extensionEnabled) {
    enableExtension();
  } else {
    disableExtension();
  }
});

////////////////////////


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.url) {
    const newMatches = [`*://${getDomainFromUrl(request.url)}/*`];
    
    chrome.action.setIcon({ path: "icon-active.png" });
    chrome.action.setPopup({ popup: "popup.html" });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostEquals: getDomainFromUrl(request.url) },
            }),
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()],
        },
      ]);
    });

    chrome.runtime.sendMessage({ matches: newMatches });
  }
});

function getDomainFromUrl(url) {
  const hostname = new URL(url).hostname;
  return hostname.replace("www.", "");
}



