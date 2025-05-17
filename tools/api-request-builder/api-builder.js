async function sendRequest() {
  const url = document.getElementById("apiUrl").value.trim();
  const method = document.getElementById("method").value;
  const headersText = document.getElementById("headers").value;
  const bodyText = document.getElementById("body").value;
  const responseBox = document.getElementById("response");

  if (!url) {
    responseBox.textContent = "Please enter a valid URL.";
    return;
  }

  let options = { method };

  try {
    if (headersText) {
      options.headers = JSON.parse(headersText);
    }

    if (method === "POST" && bodyText) {
      options.body = JSON.stringify(JSON.parse(bodyText));
      options.headers = options.headers || {};
      if (!options.headers["Content-Type"]) {
        options.headers["Content-Type"] = "application/json";
      }
    }

    const res = await fetch(url, options);
    const data = await res.text();
    responseBox.textContent = `Status: ${res.status}\n\n${data}`;
  } catch (error) {
    responseBox.textContent = `Error:\n${error.message}`;
  }
}