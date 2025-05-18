let generatedList = [];

function combineSubs() {
  const domain = document.getElementById("baseDomain").value.trim();
  const words = document.getElementById("wordlist").value.trim().split("\n").filter(w => w);

  const output = document.getElementById("output");
  generatedList = words.map(word => `${word.trim()}.${domain}`);
  output.innerText = generatedList.join("\n");
}

function downloadList() {
  if (generatedList.length === 0) return;

  const blob = new Blob([generatedList.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "subdomains.txt";
  link.click();
}