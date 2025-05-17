function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64Decode(str) {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch (e) {
    return "Invalid Base64 string";
  }
}

function urlEncode(str) {
  return encodeURIComponent(str);
}

function urlDecode(str) {
  try {
    return decodeURIComponent(str);
  } catch {
    return "Invalid URL string";
  }
}

function hexEncode(str) {
  return Array.from(str)
    .map(char => char.charCodeAt(0).toString(16))
    .join('');
}

function hexDecode(hex) {
  try {
    return hex.match(/.{1,2}/g)
      .map(byte => String.fromCharCode(parseInt(byte, 16)))
      .join('');
  } catch {
    return "Invalid Hex string";
  }
}

document.getElementById('encodeBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value;
  const mode = document.getElementById('mode').value;
  let output = "";

  if (mode === "base64") output = base64Encode(input);
  else if (mode === "url") output = urlEncode(input);
  else if (mode === "hex") output = hexEncode(input);

  document.getElementById('outputText').value = output;
});

document.getElementById('decodeBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value;
  const mode = document.getElementById('mode').value;
  let output = "";

  if (mode === "base64") output = base64Decode(input);
  else if (mode === "url") output = urlDecode(input);
  else if (mode === "hex") output = hexDecode(input);

  document.getElementById('outputText').value = output;
});