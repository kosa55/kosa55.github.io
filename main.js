// --- 写真ポップアップ ---
const images = ['photo1.jpg', 'photo2.jpg'];
const photoLink = document.querySelector('.photo-link');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const close = document.getElementById('close');

photoLink.addEventListener('click', (e) => {
  e.preventDefault();
  const randomImage = images[Math.floor(Math.random() * images.length)];
  popupImg.src = randomImage;
  popup.classList.remove('hidden');
});

close.addEventListener('click', () => {
  popup.classList.add('hidden');
  popupImg.src = '';
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
    popupImg.src = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popup.classList.add('hidden');
    popupImg.src = '';
  }
});

// --- contactポップアップ ---
const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
const contactClose = document.getElementById('contact-close');

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contactPopup.classList.remove('hidden');
});

contactClose.addEventListener('click', () => {
  contactPopup.classList.add('hidden');
});

contactPopup.addEventListener('click', (e) => {
  if (e.target === contactPopup) {
    contactPopup.classList.add('hidden');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    contactPopup.classList.add('hidden');
  }
});
