// content.js
console.log("Content script is running on:", window.location.href);

const currentPageTitle = document.title;
const sentiment = analyzeSentiment(currentPageTitle);

if (sentiment === "impulsive") {
  chrome.runtime.sendMessage({ impulseDetected: true }, (response) => {
    console.log(response.status);
  });
}
