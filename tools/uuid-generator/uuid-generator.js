const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const output = document.getElementById('uuidOutput');

generateBtn.addEventListener('click', () => {
  const uuid = crypto.randomUUID();
  output.textContent = uuid;
});

copyBtn.addEventListener('click', () => {
  if (!output.textContent) {
    alert('Generate a UUID first!');
    return;
  }
  navigator.clipboard.writeText(output.textContent).then(() => {
    alert('UUID copied to clipboard!');
  });
});