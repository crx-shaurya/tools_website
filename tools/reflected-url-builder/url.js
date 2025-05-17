function addParam() {
  const container = document.getElementById("param-container");
  const div = document.createElement("div");
  div.className = "param-set mb-2";

  div.innerHTML = `
    <input class="param-key input inline-block w-[45%]" placeholder="key" />
    <input class="param-value input inline-block w-[45%] ml-2" placeholder="value" />
  `;
  container.appendChild(div);
}

function generateURL() {
  const baseUrl = document.getElementById("baseUrl").value.trim();
  const paramSets = document.querySelectorAll(".param-set");
  let params = [];

  paramSets.forEach(set => {
    const key = set.querySelector(".param-key").value.trim();
    const value = set.querySelector(".param-value").value.trim();
    if (key) {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  });

  const finalURL = `${baseUrl}?${params.join("&")}`;
  document.getElementById("generatedUrl").textContent = finalURL;
}