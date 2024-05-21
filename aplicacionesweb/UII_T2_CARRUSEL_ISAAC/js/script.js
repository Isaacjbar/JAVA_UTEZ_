const imagenes = [
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg',
    'img/image5.jpg'
];

const imgElement = document.getElementById('imagen');
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');

let indiceImagen = 0;

function mostrarImagen() {
    imgElement.src = imagenes[indiceImagen];
}

function imagenAnterior() {
    if (indiceImagen > 0) {
        indiceImagen--;
    } else {
        indiceImagen = imagenes.length - 1;
    }
    mostrarImagen();
}

function imagenSiguiente() {
    if (indiceImagen < imagenes.length - 1) {
        indiceImagen++;
    } else {
        indiceImagen = 0;
    }
    mostrarImagen();
}

anteriorBtn.addEventListener('click', imagenAnterior);
siguienteBtn.addEventListener('click', imagenSiguiente);

// Mostrar la primera imagen al cargar la página
mostrarImagen();
