function convertCurl(type) {
  const input = document.getElementById("curlInput").value.trim();
  const output = document.getElementById("output");

  if (!input.startsWith("curl")) {
    output.innerHTML = "<span style='color: red;'>Invalid cURL command.</span>";
    return;
  }

  try {
    const parts = input.match(/(?:[^\s"]+|"[^"]*")+/g);
    const methodIndex = parts.findIndex(p => p === "-X");
    const method = methodIndex !== -1 ? parts[methodIndex + 1] : "GET";

    const url = parts.find(p => p.startsWith("http"));
    const headers = {};
    const dataIndex = parts.findIndex(p => p === "-d" || p === "--data");
    const data = dataIndex !== -1 ? parts[dataIndex + 1].replace(/^"|"$/g, "") : "";

    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "-H") {
        const [key, value] = parts[i + 1].replace(/^"|"$/g, "").split(/:\s*/);
        headers[key] = value;
      }
    }

    let jsCode = "";

    if (type === "fetch") {
      jsCode = `fetch("${url}", {
  method: "${method}",
  headers: ${JSON.stringify(headers, null, 2)},
  ${data ? `body: "${data}",` : ""}
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`;
    } else if (type === "axios") {
      jsCode = `axios({
  method: "${method.toLowerCase()}",
  url: "${url}",
  headers: ${JSON.stringify(headers, null, 2)},
  ${data ? `data: "${data}",` : ""}
})
  .then(res => console.log(res.data))
  .catch(console.error);`;
    }

    output.innerHTML = `<code>${jsCode}</code>`;
  } catch (err) {
    output.innerHTML = `<span style="color:red;">Error parsing cURL command.</span>`;
  }
}