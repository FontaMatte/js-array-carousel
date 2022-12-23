// STEP 
// 1. CREO L'ARRAY CON ALL'INTERNO LE IMMAGINI


const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const carouselElement = document.querySelector('.carousel');

for ( let i = 0 ; i < images.length ; i++) {
    console.log(images[i]);

carouselElement.innerHTML += `<div class="slide">
                                <img src="${images[1]}">
                            </div>`;
}

// inporto le slide
const allSlide = document.querySelectorAll('.slide');
console.log(allSlide);

// stampo la classe "current" sulla prima slide per rendere l'immagine visibile
let currentSlide = 0;

allSlide[currentSlide].classList.add('current');