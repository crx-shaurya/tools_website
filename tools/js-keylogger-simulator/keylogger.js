const logOutput = document.getElementById("logOutput");
const typingArea = document.getElementById("typingArea");

document.addEventListener("keydown", function (event) {
  const key = event.key === " " ? "[space]" : event.key;
  const time = new Date().toLocaleTimeString();

  const logEntry = `[${time}] Key Pressed: ${key}\n`;
  logOutput.textContent += logEntry;
  logOutput.scrollTop = logOutput.scrollHeight;
});