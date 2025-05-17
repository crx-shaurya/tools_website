function generatePasswords() {
  const baseWordsInput = document.getElementById("baseWords").value.trim();
  const addNumbers = document.getElementById("addNumbers").checked;
  const addSpecial = document.getElementById("addSpecialChars").checked;
  const outputArea = document.getElementById("passwordList");

  if (!baseWordsInput) {
    outputArea.value = "Please enter some base words.";
    return;
  }

  const baseWords = baseWordsInput.split(",").map(w => w.trim()).filter(w => w !== "");
  const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '123', '321'];
  let passwordSet = new Set();

  baseWords.forEach(word => {
    passwordSet.add(word);
    if (addNumbers) {
      for (let i = 0; i <= 100; i++) {
        passwordSet.add(word + i);
        passwordSet.add(i + word);
      }
    }
    if (addSpecial) {
      specials.forEach(s => {
        passwordSet.add(word + s);
        passwordSet.add(s + word);
      });
    }
  });

  outputArea.value = Array.from(passwordSet).join("\n");
}

function downloadPasswords() {
  const passwords = document.getElementById("passwordList").value;
  const blob = new Blob([passwords], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "password_list.txt";
  link.click();
}