function loadStorage(type) {
  const output = document.getElementById("storageOutput");
  output.innerHTML = "";

  const storage = type === "local" ? localStorage : sessionStorage;

  if (storage.length === 0) {
    output.innerHTML = `<p class="text-gray-400">No items in ${type}Storage</p>`;
    return;
  }

  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    const value = storage.getItem(key);

    const container = document.createElement("div");
    container.className = "storage-item";

    container.innerHTML = `
      <div class="key">${key}</div>
      <div class="value">${value}</div>
      <button class="btn bg-red-600 mt-2" onclick="deleteKey('${type}', '${key}')">Delete</button>
    `;

    output.appendChild(container);
  }
}

function deleteKey(type, key) {
  const storage = type === "local" ? localStorage : sessionStorage;
  storage.removeItem(key);
  loadStorage(type);
}