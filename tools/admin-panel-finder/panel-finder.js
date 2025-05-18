const paths = [
  "admin", "admin/login", "adminpanel", "wp-admin", "administrator", "cpanel", "login", "dashboard", "admin_area"
];

function startScan() {
  const domainInput = document.getElementById("domain").value.trim();
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!domainInput) {
    result.innerHTML = "<p class='text-red-400'>Please enter a domain.</p>";
    return;
  }

  paths.forEach((path, i) => {
    setTimeout(() => {
      const url = `https://${domainInput}/${path}`;
      const found = Math.random() < 0.1;
      const color = found ? "text-green-400" : "text-gray-400";
      result.innerHTML += `<p class="${color}">${found ? "[FOUND]" : "[NOT FOUND]"} ${url}</p>`;
    }, i * 300);
  });
}