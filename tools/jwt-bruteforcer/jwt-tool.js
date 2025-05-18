const jwtInput = document.getElementById('jwtInput');
const wordlistInput = document.getElementById('wordlistInput');
const startBtn = document.getElementById('startBtn');
const resultDiv = document.getElementById('result');

function verifyJWT(token, key) {
  try {
    // Use jsrsasign to verify signature with HS256
    const isValid = KJUR.jws.JWS.verifyJWT(token, key, { alg: ['HS256'] });
    return isValid;
  } catch {
    return false;
  }
}

async function bruteforceJWT(token, keys) {
  resultDiv.textContent = 'Starting bruteforce...';

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i].trim();
    if (!key) continue;

    resultDiv.textContent = `Trying key (${i + 1}/${keys.length}): "${key}"`;

    // Wait a bit to update UI
    await new Promise(r => setTimeout(r, 100));

    if (verifyJWT(token, key)) {
      resultDiv.textContent = `Success! Key found: "${key}"`;
      return;
    }
  }

  resultDiv.textContent = 'Failed to find the key in the provided wordlist.';
}

startBtn.addEventListener('click', () => {
  const token = jwtInput.value.trim();
  const wordlist = wordlistInput.value.split('\n').map(s => s.trim()).filter(Boolean);

  if (!token) {
    resultDiv.textContent = 'Please paste a JWT token.';
    return;
  }

  if (wordlist.length === 0) {
    resultDiv.textContent = 'Please enter at least one key to try.';
    return;
  }

  bruteforceJWT(token, wordlist);
});