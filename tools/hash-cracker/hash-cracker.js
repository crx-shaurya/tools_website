const wordlist = ["password", "123456", "admin", "letmein", "welcome", "dragon", "qwerty", "sunshine", "monkey", "shadow"];

function hashString(str, type) {
  switch (type) {
    case 'md5':
      return CryptoJS.MD5(str).toString();
    case 'sha1':
      return CryptoJS.SHA1(str).toString();
    case 'sha256':
      return CryptoJS.SHA256(str).toString();
    default:
      return '';
  }
}

document.getElementById('crackBtn').addEventListener('click', () => {
  const inputHash = document.getElementById('hashInput').value.trim().toLowerCase();
  const hashType = document.getElementById('hashType').value;
  const resultDiv = document.getElementById('result');

  let found = false;
  for (let word of wordlist) {
    const hashed = hashString(word, hashType);
    if (hashed === inputHash) {
      resultDiv.textContent = `Match found: "${word}"`;
      found = true;
      break;
    }
  }

  if (!found) resultDiv.textContent = "No match found in dictionary.";
});