const output = document.getElementById("output");
const inputBox = document.getElementById("userInput");

function injectXSS() {
  const value = inputBox.value;
  output.innerHTML = value;
}

// Load from URL if available
window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const input = urlParams.get("input");

  if (input) {
    inputBox.value = input;
    injectXSS();
  }
};