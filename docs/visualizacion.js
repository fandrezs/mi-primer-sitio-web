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