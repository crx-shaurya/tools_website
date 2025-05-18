async function generateHMAC() {
  const message = document.getElementById("hmacMessage").value;
  const key = document.getElementById("hmacKey").value;
  const algo = document.getElementById("hmacAlgo").value;

  if (!message || !key) return alert("Enter both message and secret key.");

  const enc = new TextEncoder();
  const keyData = enc.encode(key);
  const msgData = enc.encode(message);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: { name: algo } },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, msgData);
  const hashHex = Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  document.getElementById("hmacOutput").value = hashHex;
}

function copyHMAC() {
  const output = document.getElementById("hmacOutput");
  output.select();
  document.execCommand("copy");
}