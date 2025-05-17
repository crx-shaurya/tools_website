let rsaKeypair;

document.getElementById("algorithm").addEventListener("change", function () {
  const algo = this.value;
  const keySection = document.getElementById("keySection");
  if (algo === "rsa") {
    keySection.style.display = "none";
    rsaKeypair = forge.pki.rsa.generateKeyPair(1024);
    document.getElementById("key").value = '';
  } else {
    keySection.style.display = "block";
  }
});

function encrypt() {
  const algo = document.getElementById("algorithm").value;
  const text = document.getElementById("inputText").value;
  const key = document.getElementById("key").value;
  let output = "";

  if (!text) {
    alert("Enter text to encrypt.");
    return;
  }

  if (algo === "aes") {
    if (!key) return alert("AES requires a key.");
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    output = encrypted;
  } else if (algo === "rsa") {
    const encrypted = rsaKeypair.publicKey.encrypt(forge.util.encodeUtf8(text), "RSA-OAEP");
    output = forge.util.encode64(encrypted);
  }

  document.getElementById("outputText").value = output;
}

function decrypt() {
  const algo = document.getElementById("algorithm").value;
  const text = document.getElementById("inputText").value;
  const key = document.getElementById("key").value;
  let output = "";

  if (!text) {
    alert("Enter text to decrypt.");
    return;
  }

  if (algo === "aes") {
    if (!key) return alert("AES requires a key.");
    try {
      const decrypted = CryptoJS.AES.decrypt(text, key);
      output = decrypted.toString(CryptoJS.enc.Utf8);
    } catch (err) {
      output = "Failed to decrypt.";
    }
  } else if (algo === "rsa") {
    try {
      const decoded = forge.util.decode64(text);
      const decrypted = rsaKeypair.privateKey.decrypt(decoded, "RSA-OAEP");
      output = forge.util.decodeUtf8(decrypted);
    } catch (err) {
      output = "Failed to decrypt RSA. Key mismatch or corrupted input.";
    }
  }

  document.getElementById("outputText").value = output;
}