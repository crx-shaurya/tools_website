function evaluateCSP() {
  const input = document.getElementById("cspInput").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!input.toLowerCase().startsWith("content-security-policy:")) {
    resultDiv.innerHTML = "<span style='color: red;'>Invalid CSP format. It should start with 'Content-Security-Policy:'</span>";
    return;
  }

  const directives = input.split(":")[1].trim().split(";");
  const findings = [];

  directives.forEach(dir => {
    const [name, ...values] = dir.trim().split(" ");
    if (!name) return;

    const val = values.join(" ");

    if (name === "default-src" && val.includes("*")) {
      findings.push("Warning: default-src allows all origins (*) — high risk.");
    }
    if (name === "script-src" && val.includes("'unsafe-inline'")) {
      findings.push("Warning: script-src includes 'unsafe-inline' — vulnerable to XSS.");
    }
    if (name === "script-src" && val.includes("'unsafe-eval'")) {
      findings.push("Warning: script-src includes 'unsafe-eval' — risky behavior.");
    }
    if (name === "script-src" && val === "'none'") {
      findings.push("Good: No inline scripts allowed.");
    }
    if (!val) {
      findings.push(`Notice: Directive "${name}" has no value.`);
    }
  });

  resultDiv.innerHTML = findings.length
    ? findings.map(f => `• ${f}`).join("<br>")
    : "CSP looks fine based on basic checks.";
}