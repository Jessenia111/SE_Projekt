/*
kasutatud allikad: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/howto/howto_css_modals.asp
https://webdesign.tutsplus.com/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500t
https://www.w3schools.com/howto/howto_css_modal_images.asp
*/
function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('visible');
}
let currentImageIndex = 0; // alustab 1 pildiga
const images = document.querySelectorAll('.parallax'); // parallax tagis olevad pildid

function showImage(index) {
  // eemaldas 'active' piltidest
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active'); // lisab 'active' valitud pildile
    }
  });
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // tagasi viimasele pildile
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // tagasi 1. pildile
  showImage(currentImageIndex);
}

// näitab 1 praegune pilt
showImage(currentImageIndex);


const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// funktsioon et avada modal ja näitama pilt
function enlargeImage(src) {
    modal.style.display = 'block';
    modalImage.src = src; // img allik on vajutatud img
}

function closeModal() {
    modal.style.display = 'none';
}

// kehtib kõikide image-details piltide jaoks
document.querySelectorAll('.details-img').forEach(img => {
    img.addEventListener('click', () => enlargeImage(img.src));
});
