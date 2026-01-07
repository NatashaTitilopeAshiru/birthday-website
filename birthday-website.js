/*
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('confetti-button');

  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 80);
  }

  button.addEventListener('click', () => {
    for (let i = 0; i < 25; i++) {
      createHeart();
    }
  });
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖 💕 ✨';

  heart.style.left = Math.random() * 100 + 'vw';

  heart.style.fontSize = 16 + Math.random() * 24 + 'px';

  heart.style.animationDuration = 2 + Math.random() * 2 + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
*/

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('confetti-button');

  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
  }


  button.addEventListener('click', () => {
    for (let i = 0; i < 25; i++) {
      createHeart();
    }
  });
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');


  const emojis = ['💖', '💕', '✨', '🎉', '🎂'];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = 16 + Math.random() * 24 + 'px';
  heart.style.animationDuration = 2 + Math.random() * 2 + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
