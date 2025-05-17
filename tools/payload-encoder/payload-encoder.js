function encodePayload(type) {
  const input = document.getElementById("payloadInput").value;
  const outputEl = document.getElementById("encodedOutput");

  if (!input) {
    outputEl.textContent = "Please enter a payload to encode.";
    return;
  }

  let encoded = "";

  switch (type) {
    case "url":
      encoded = encodeURIComponent(input);
      break;
    case "base64":
      encoded = btoa(unescape(encodeURIComponent(input)));
      break;
    case "hex":
      encoded = [...input].map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
      break;
    default:
      encoded = "Invalid encoding type.";
  }

  outputEl.textContent = encoded;
}