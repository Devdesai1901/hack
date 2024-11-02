// popup.js
document.getElementById("view-suggestions").addEventListener("click", () => {
  // Logic to display suggestions or handle user actions
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "<p>Here are some sustainable alternatives...</p>";
});

// Close the popup when the user clicks outside of it (optional)
window.addEventListener("click", (event) => {
  if (event.target === window) {
    window.close();
  }
});
