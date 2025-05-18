const formatSelect = document.getElementById('formatSelect');
const inputText = document.getElementById('inputText');
const formatBtn = document.getElementById('formatBtn');
const outputText = document.getElementById('outputText');

function csvToJson(csv) {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return 'Invalid CSV data.';
  const headers = lines[0].split(',').map(h => h.trim());
  const jsonArr = [];

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(',');
    if(currentLine.length !== headers.length) return 'CSV format error: row length mismatch.';
    headers.forEach((header, idx) => {
      obj[header] = currentLine[idx].trim();
    });
    jsonArr.push(obj);
  }
  return JSON.stringify(jsonArr, null, 2);
}

function jsonToCsv(jsonStr) {
  let arr;
  try {
    arr = JSON.parse(jsonStr);
    if (!Array.isArray(arr)) return 'JSON must be an array of objects.';
  } catch {
    return 'Invalid JSON.';
  }

  if (arr.length === 0) return '';

  const headers = Object.keys(arr[0]);
  const csvRows = [headers.join(',')];

  arr.forEach(obj => {
    const row = headers.map(h => {
      let val = obj[h];
      if (val === undefined || val === null) val = '';
      else val = val.toString().replace(/"/g, '""'); // Escape quotes
      if (val.includes(',') || val.includes('\n')) {
        val = `"${val}"`; // Wrap in quotes if commas/newlines
      }
      return val;
    });
    csvRows.push(row.join(','));
  });

  return csvRows.join('\n');
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

formatBtn.addEventListener('click', () => {
  const action = formatSelect.value;
  const text = inputText.value.trim();
  let result = '';

  if (!text) {
    outputText.value = 'Please enter some text.';
    return;
  }

  try {
    switch(action) {
      case 'json-prettify':
        {
          const parsed = JSON.parse(text);
          result = JSON.stringify(parsed, null, 2);
        }
        break;

      case 'json-minify':
        {
          const parsed = JSON.parse(text);
          result = JSON.stringify(parsed);
        }
        break;

      case 'csv-to-json':
        result = csvToJson(text);
        break;

      case 'json-to-csv':
        result = jsonToCsv(text);
        break;

      case 'uppercase':
        result = text.toUpperCase();
        break;

      case 'lowercase':
        result = text.toLowerCase();
        break;

      case 'capitalize':
        result = capitalizeWords(text);
        break;

      case 'remove-spaces':
        result = text.replace(/\s+/g, ' ').trim();
        break;

      default:
        result = 'Unknown format action.';
    }
  } catch (e) {
    result = 'Error: ' + e.message;
  }

  outputText.value = result;
});