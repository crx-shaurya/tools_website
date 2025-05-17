function formatText() {
  const text = document.getElementById("inputText").value;
  const format = document.getElementById("formatType").value;
  let formatted = "";

  switch(format) {
    case "uppercase":
      formatted = text.toUpperCase();
      break;
    case "lowercase":
      formatted = text.toLowerCase();
      break;
    case "sentencecase":
      formatted = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
      break;
    case "capitalize":
      formatted = text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
      break;
    case "removeSpaces":
      formatted = text.replace(/\s+/g, ' ').trim();
      break;
    default:
      formatted = text;
  }

  document.getElementById("outputText").value = formatted;
}