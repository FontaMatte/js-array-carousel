// creo array con le immagini
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const carouselElement = document.querySelector('.carousel');

// uso un ciclo for per inserire tutte le immagini in modo dinamico nell' HTML
for ( let i = 0 ; i < images.length ; i++) {
    console.log(images[i]);

carouselElement.innerHTML += `<div class="slide">
                                <img src="${images[i]}">
                            </div>`;
}

// importo le slide
const allSlides = document.querySelectorAll('.slide');

// stampo la classe "current" sulla prima slide per rendere l'immagine visibile
let currentSlide = 0;

allSlides[currentSlide].classList.add('current');

const previousImage = document.querySelector('.previous');
const nextImage = document.querySelector('.next');

// al click passo all'immagine sucessiva
nextImage.addEventListener('click',
    function() {
        console.log('cliccato next');

        allSlides[currentSlide].classList.remove('current'); //rimuovo classe "current" alla vecchia slide
        currentSlide += 1; //ad ogni click incemento l'indice di 1 per cambiare immagine

        allSlides[currentSlide].classList.add('current');  //aagiungo la classe "current" alla nuova slide

        previousImage.classList.remove('hidden');    //rimuovo la classe hidden per rendere visibile la freecia previous

        if (currentSlide == 4) { 
        nextImage.classList.add('hidden');  //nascondo la freccia next quando arrivo all'ultima immagine
        }
    }
    
);

// al click passo all'immagine precedente
previousImage.addEventListener('click',
    function() {
        console.log('cliccato previous');

        allSlides[currentSlide].classList.remove('current');
        currentSlide -= 1;

        allSlides[currentSlide].classList.add('current');

        nextImage.classList.remove('hidden');

        if (currentSlide == 0) {          
            previousImage.classList.add('hidden');
        }
    }
    
);