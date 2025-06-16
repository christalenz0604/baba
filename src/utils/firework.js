export function launchFirework() {
  const container = document.getElementById('fireworks');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    container.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
  }
}
