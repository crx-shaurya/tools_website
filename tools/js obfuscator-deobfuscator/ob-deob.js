function obfuscateJS() {
  const code = document.getElementById("jsInput").value;
  if (!code) return alert("Enter JS code first.");
  
  let encoded = btoa(unescape(encodeURIComponent(code)));
  let obfuscated = `eval(decodeURIComponent(escape(atob("${encoded}"))));`;
  
  document.getElementById("jsOutput").value = obfuscated;
}

function deobfuscateJS() {
  const input = document.getElementById("jsInput").value.trim();

  try {
    const regex = /atob"([^"]+)"/;
    const match = input.match(regex);
    if (!match) throw new Error("Invalid input");

    const encoded = match[1];
    const decoded = decodeURIComponent(escape(atob(encoded)));
    document.getElementById("jsOutput").value = decoded;
  } catch (e) {
    alert("Deobfuscation failed. Ensure it’s a supported pattern.");
  }
}

function copyResult() {
  const output = document.getElementById("jsOutput");
  output.select();
  document.execCommand("copy");
}