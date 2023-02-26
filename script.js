const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text =
  'The frontend is everything a user sees and interacts with when they click on a link or type in a web address. The web address is also known as at URL and it tells what webpage should load and appear in your browser.';
let idx = 1;
let speed = 400 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 400 / e.target.value));
