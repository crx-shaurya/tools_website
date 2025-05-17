const searchInput = document.getElementById('searchInput');
const toolGrid = document.getElementById('toolGrid');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const tools = toolGrid.querySelectorAll('a.tool-card');
  tools.forEach(tool => {
    const text = tool.textContent.toLowerCase();
    tool.style.display = text.includes(query) ? 'block' : 'none';
  });
});