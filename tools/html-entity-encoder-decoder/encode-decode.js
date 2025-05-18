const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const clearBtn = document.getElementById('clearBtn');

function encodeHTML(str) {
  return str.replace(/[\u00A0-\u9999<>&"'`]/g, function(i) {
    return '&#' + i.charCodeAt(0) + ';';
  });
}

function decodeHTML(str) {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

encodeBtn.addEventListener('click', () => {
  const text = inputText.value;
  if (!text.trim()) {
    outputText.value = '';
    return;
  }
  outputText.value = encodeHTML(text);
});

decodeBtn.addEventListener('click', () => {
  const text = inputText.value;
  if (!text.trim()) {
    outputText.value = '';
    return;
  }
  outputText.value = decodeHTML(text);
});

clearBtn.addEventListener('click', () => {
  inputText.value = '';
  outputText.value = '';
});