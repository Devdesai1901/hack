// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.impulseDetected) {
    console.log("Impulse behavior detected!");

    // Trigger the action popup
    chrome.action.openPopup();
    sendResponse({ status: "Popup opened" });
  }
});
