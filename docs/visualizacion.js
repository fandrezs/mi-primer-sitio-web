const videoIntro = document.querySelector('.video-intro');

// Escuchar el evento de scroll
window.addEventListener('scroll', () => {
  // Calcular cuánto se ha desplazado la página
  const scrollPosition = window.scrollY;

  // Controlar la posición del video
  if (scrollPosition > 0) {
    videoIntro.style.transform = `translateY(-${scrollPosition}px)`; // Desplaza el video hacia arriba
  } else {
    videoIntro.style.transform = 'translateY(0)'; // Restaurar la posición si no hay scroll
  }
});





document.querySelector('.rebirthIsland').addEventListener('click', apiRequest)
document.querySelector('.caldera').addEventListener('click', apiRequest2)
document.querySelector('.fortunesKeep').addEventListener('click', apiRequest3)
document.querySelector('.alMazrah').addEventListener('click', apiRequest4)

let quotesArray = 
["",
"Caldera sucks!",
"C'mon squad, we're going",
"See you guys over at",
"I'm thinkin'",
"Only noobs land in",
"Follow me!",
"Let's land anywhere that isn't",
"Let's drop at",
"I miss Verdansk.",
"Survey says!! . . . ",
"Hot Drop over at",
"All the streamers drop at",
"We switchin' maps after this?",
"I would hate to drop at",
"I'm feeling lucky,",
"Good luck!",
"We're going to"
]

function randomQuote(){
  let random = Math.ceil(Math.random()*(quotesArray.length-1));
  document.querySelector('span').innerText = `${quotesArray[random]}`
}

//I made this app to practice using acync-await functions from an API that I created:
async function apiRequest(){
    try{
        const response = await fetch(`https://web-production-9057.up.railway.app/random`) //API by me!
        const data = await response.json()
        randomQuote()
        document.querySelector('h2').innerText = `${data.toString()}!`
    }catch(error){
        console.log(error)
        document.querySelector('h2').innerText = `404! Uh oh, server is not responding. \n${error}!`
    }
}

async function apiRequest2(){
    try{
        const response = await fetch(`https://web-production-9057.up.railway.app/random2`) //API by me!
        const data = await response.json()
        randomQuote()
        document.querySelector('h2').innerText = `${data.toString()}!`
    }catch(error){
        console.log(error)
        document.querySelector('h2').innerText = `404! Uh oh, server is not responding. \n${error}!`
    }
}

async function apiRequest3(){
    try{
        const response = await fetch(`https://web-production-9057.up.railway.app/random3`) //API by me!
        const data = await response.json()
        randomQuote()
        document.querySelector('h2').innerText = `${data.toString()}!`
    }catch(error){
        console.log(error)
        document.querySelector('h2').innerText = `404! Uh oh, server is not responding. \n${error}!`
    }
}

async function apiRequest4(){
    try{
        const response = await fetch(`https://web-production-9057.up.railway.app/random4`) //API by me!
        const data = await response.json()
        randomQuote()
        document.querySelector('h2').innerText = `${data.toString()}!`
    }catch(error){
        console.log(error)
        document.querySelector('h2').innerText = `404! Uh oh, server is not responding. \n${error}!`
    }
}

$(document).ready(function () {
    // velocidad de rotación y temporizador
    var speed = 5000;
    
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; // id del botón de "anterior"
    var next = 'next'; // id del botón de "siguiente"
    slides.width(item_width); // ajusta el ancho de los slides
    container.parent().width(item_width);
    container.width(slides.length * item_width); // ajusta el contenedor de los slides
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    // Si el usuario hace clic en el botón de "prev"
    $('#buttons a').click(function (e) {
        // desliza el elemento
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
        // cancela el comportamiento por defecto del enlace
        return false;
        
    });
    
    // Si el ratón está sobre el contenedor, pausa la rotación automática
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    
    // Ajuste de los slides al salir de la animación
    function resetSlides() {
        container.css({
            'left': -1 * item_width
        });
    }
});

// función simple para hacer clic en el enlace "siguiente"
// un temporizador llamará a esta función, y la rotación comenzará
function rotate() {
    $('#next').click();
}