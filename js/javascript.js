var ancho_carrousel_item = 300;

function izquierda() {
    document.querySelector('.carr-inner').scrollLeft = document.querySelector('.carr-inner').scrollLeft - ancho_carrousel_item;
}

function derecha() {
    document.querySelector('.carr-inner').scrollLeft = document.querySelector('.carr-inner').scrollLeft + ancho_carrousel_item;
}

window.addEventListener('resize', () =>{
    detecta_ancho_pantalla();
});

window.addEventListener('load', () =>{
    detecta_ancho_pantalla();
});

function detecta_ancho_pantalla() {
    if (window.innerWidth < 576) {
        ancho_carrousel_item = 200;
    } else {
        ancho_carrousel_item = 300;
    }
}