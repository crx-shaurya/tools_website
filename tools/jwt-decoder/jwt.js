function decodeJWT() {
  const input = document.getElementById("jwtInput").value;
  const parts = input.split(".");
  if (parts.length !== 3) {
    alert("Invalid JWT Token!");
    return;
  }

  try {
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));

    document.getElementById("jwtHeader").textContent = JSON.stringify(header, null, 2);
    document.getElementById("jwtPayload").textContent = JSON.stringify(payload, null, 2);
  } catch (err) {
    alert("Error decoding JWT!");
  }
}