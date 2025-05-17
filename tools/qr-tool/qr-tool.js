function generateQR() {
  const text = document.getElementById("qrInput").value.trim();
  if (!text) return alert("Please enter text to generate QR.");
  const qrOutput = document.getElementById("qrOutput");
  qrOutput.innerHTML = "";
  QRCode.toCanvas(document.createElement("canvas"), text, function (err, canvas) {
    if (err) return console.error(err);
    qrOutput.appendChild(canvas);
  });
}

function startScanner() {
  const videoElement = document.getElementById("preview");
  const scannedResult = document.getElementById("scannedResult");
  const html5QrCode = new Html5Qrcode("preview");

  Html5Qrcode.getCameras().then((devices) => {
    if (devices && devices.length) {
      html5QrCode.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: 250
        },
        (decodedText, decodedResult) => {
          scannedResult.textContent = "Scanned: " + decodedText;
          html5QrCode.stop();
        },
        (errorMessage) => {
          // Optional: console.log(errorMessage);
        }
      );
    }
  }).catch((err) => {
    alert("Camera error: " + err);
  });
}