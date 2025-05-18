const dateInput = document.getElementById('dateInput');
const toTimestampBtn = document.getElementById('toTimestampBtn');
const timestampOutput = document.getElementById('timestampOutput');

const timestampInput = document.getElementById('timestampInput');
const toDateBtn = document.getElementById('toDateBtn');
const dateOutput = document.getElementById('dateOutput');

toTimestampBtn.addEventListener('click', () => {
  if (!dateInput.value) {
    timestampOutput.textContent = 'Please select a valid date and time.';
    return;
  }
  const date = new Date(dateInput.value);
  const timestamp = Math.floor(date.getTime() / 1000);
  timestampOutput.textContent = timestamp;
});

toDateBtn.addEventListener('click', () => {
  const ts = timestampInput.value.trim();
  if (!ts || isNaN(ts)) {
    dateOutput.textContent = 'Please enter a valid Unix timestamp.';
    return;
  }
  const date = new Date(Number(ts) * 1000);
  if (isNaN(date.getTime())) {
    dateOutput.textContent = 'Invalid timestamp.';
    return;
  }
  dateOutput.textContent = date.toLocaleString();
});