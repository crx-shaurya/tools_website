function injectPayload() {
  const payload = document.getElementById("payload").value;
  const output = document.getElementById("output");

  // This is intentionally unsafe. You can observe payload effects here.
  output.innerHTML = payload;
}

function clearOutput() {
  document.getElementById("output").innerHTML = '';
  document.getElementById("payload").value = '';
}