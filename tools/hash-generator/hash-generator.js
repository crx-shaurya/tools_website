function generateHash(type) {
  const input = document.getElementById("inputText").value;
  let hash;

  if (!input.trim()) {
    document.getElementById("result").innerText = "Please enter text to hash.";
    return;
  }

  switch (type) {
    case 'md5':
      hash = CryptoJS.MD5(input).toString();
      break;
    case 'sha1':
      hash = CryptoJS.SHA1(input).toString();
      break;
    case 'sha256':
      hash = CryptoJS.SHA256(input).toString();
      break;
    default:
      hash = "Invalid hash type.";
  }

  document.getElementById("result").innerText = `${type.toUpperCase()}:\n${hash}`;
}