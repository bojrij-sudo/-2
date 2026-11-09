const square = document.getElementById('square');
const scoreEl = document.getElementById('score');
let score = 0;

function moveSquare() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  square.style.left = x + 'px';
  square.style.top = y + 'px';
}

square.addEventListener('click', () => {
  score++;
  scoreEl.textContent = score;
  moveSquare();
});

moveSquare();
