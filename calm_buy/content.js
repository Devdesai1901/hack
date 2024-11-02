import { analyzeSentiment } from "./sentiment_analysis.js"; // Import if using modules

// Example of using the analyzeSentiment function
const currentPageTitle = document.title;
const sentiment = analyzeSentiment(currentPageTitle);

if (sentiment === "impulsive") {
  chrome.runtime.sendMessage({ impulseDetected: true });
}
