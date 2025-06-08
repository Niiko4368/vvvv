document.querySelector('.menu').addEventListener('click', () => {
  const menuOptions = document.getElementById('menuOptions');
  menuOptions.style.display = (menuOptions.style.display === 'flex') ? 'none' : 'flex';
});

const rain = document.querySelector('.rain');
for (let i = 0; i < 100; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.style.left = Math.random() * window.innerWidth + 'px';
  drop.style.animationDuration = 0.5 + Math.random() * 0.7 + 's';
  drop.style.opacity = Math.random();
  rain.appendChild(drop);
}
document.querySelector('.menu')?.addEventListener('click', () => {
  const menuOptions = document.getElementById('menuOptions');
  menuOptions.style.display = (menuOptions.style.display === 'flex') ? 'none' : 'flex';
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
