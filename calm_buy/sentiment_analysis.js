// sentiment.js
function analyzeSentiment(text) {
  const impulsiveKeywords = [
    "buy",
    "discount",
    "limited time",
    "sale",
    "exclusive",
    "shopping",
  ];
  let score = 0;

  impulsiveKeywords.forEach((keyword) => {
    if (text.toLowerCase().includes(keyword)) {
      score += 1;
    }
  });
  console.log(score);
  return score > 0 ? "impulsive" : "neutral";
}
