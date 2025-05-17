function testRegex() {
  const pattern = document.getElementById("regexInput").value;
  const testStr = document.getElementById("testString").value;
  const resultEl = document.getElementById("result");

  if (!pattern) {
    resultEl.textContent = "Please enter a regex pattern.";
    return;
  }

  try {
    const regex = new RegExp(pattern, "g"); // global flag to find all matches
    const matches = [...testStr.matchAll(regex)];

    if (matches.length === 0) {
      resultEl.textContent = "No matches found.";
    } else {
      let output = `Matches found: ${matches.length}\n\n`;
      matches.forEach((match, idx) => {
        output += `Match ${idx + 1}: "${match[0]}" at index ${match.index}\n`;
      });
      resultEl.textContent = output;
    }
  } catch (e) {
    resultEl.textContent = `Invalid regex pattern: ${e.message}`;
  }
}