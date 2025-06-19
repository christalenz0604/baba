import confetti from 'canvas-confetti';

export function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 },
    colors: ['#f94144', '#f3722c', '#f9c74f', '#90be6d', '#43aa8b', '#577590']
  });
}
