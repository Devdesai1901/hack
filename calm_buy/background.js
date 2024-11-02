// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.impulseDetected) {
    console.log("Impulse behavior detected!");

    // Open the popup window instead of a notification
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 400,
      height: 300,
    });

    sendResponse({ status: "Popup opened" });
  }
});
