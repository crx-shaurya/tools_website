function beautifyCode() {
  const code = document.getElementById("codeInput").value;
  const type = document.getElementById("codeType").value;
  let beautified = "";

  switch (type) {
    case "html":
      beautified = html_beautify(code);
      break;
    case "css":
      beautified = css_beautify(code);
      break;
    case "js":
      beautified = js_beautify(code);
      break;
  }

  document.getElementById("outputCode").textContent = beautified;
}

function minifyCode() {
  const code = document.getElementById("codeInput").value;
  const type = document.getElementById("codeType").value;
  let minified = "";

  try {
    switch (type) {
      case "html":
        minified = code.replace(/\n/g, "").replace(/\s{2,}/g, " ").trim();
        break;
      case "css":
        minified = code.replace(/\s+/g, " ").replace(/\s*([:;{},])\s*/g, "$1").trim();
        break;
      case "js":
        // Very basic minifier to avoid CORS from Uglify
        minified = code.replace(/\s+/g, " ").replace(/\s*([=+*/{}();,:])\s*/g, "$1").trim();
        break;
    }
  } catch (e) {
    minified = "Error minifying code.";
  }

  document.getElementById("outputCode").textContent = minified;
}