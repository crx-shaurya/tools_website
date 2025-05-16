const searchInput = document.getElementById('searchInput');
const toolGrid = document.getElementById('toolGrid');
const tools = toolGrid.getElementsByTagName('a');

searchInput.addEventListener('input', function () {
  const filter = this.value.toLowerCase();

  for (let i = 0; i < tools.length; i++) {
    const tool = tools[i];
    const text = tool.textContent.toLowerCase();

    if (text.indexOf(filter) > -1) {
      tool.style.display = '';
    } else {
      tool.style.display = 'none';
    }
  }
});
