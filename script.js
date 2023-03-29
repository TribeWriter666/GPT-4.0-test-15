const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

function noise(x, y) {
  const scale = 0.01;
  return (Math.sin(x * scale) + Math.cos(y * scale) + 2) / 2;
}

function hypnoticNoisePattern(time) {
  const gridSize = 20;

  for (let y = 0; y < canvas.height; y += gridSize) {
    for (let x = 0; x < canvas.width; x += gridSize) {
      const hue = noise(x + time, y + time) * 360;
      ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.fillRect(x, y, gridSize, gridSize);
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hypnoticNoisePattern(time);

  time += 1;

  requestAnimationFrame(animate);
}

animate();
