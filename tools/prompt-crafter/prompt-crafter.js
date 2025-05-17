function generatePrompt() {
  const goal = document.getElementById("goal").value.trim();
  const context = document.getElementById("context").value.trim();
  const style = document.getElementById("style").value.trim();

  let prompt = `Task: ${goal}\n`;

  if (context) {
    prompt += `\nContext:\n${context}\n`;
  }

  if (style) {
    prompt += `\nStyle/Format:\n${style}`;
  }

  document.getElementById("craftedPrompt").innerText = prompt;
  document.getElementById("outputSection").classList.remove("hidden");
}

function copyPrompt() {
  const promptText = document.getElementById("craftedPrompt").innerText;
  navigator.clipboard.writeText(promptText);
  alert("Prompt copied to clipboard!");
}