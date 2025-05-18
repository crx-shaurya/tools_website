const markdownInput = document.getElementById('markdownInput');
const htmlOutput = document.getElementById('htmlOutput');
const preview = document.getElementById('preview');
const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', () => {
  const markdownText = markdownInput.value;
  if (!markdownText.trim()) {
    htmlOutput.value = '';
    preview.innerHTML = '';
    return;
  }

  // Convert markdown to HTML using marked.js
  const html = marked.parse(markdownText);

  htmlOutput.value = html;
  preview.innerHTML = html;
});