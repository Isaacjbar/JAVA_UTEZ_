document.addEventListener("DOMContentLoaded", () => {
    const imagenes = ["img/papel.jpg", "img/piedra.jpg", "img/tijera.jpeg", "img/hasbulla.png"];
    const boton = document.getElementById("mostrarImagen");
    const imgTag = document.getElementById("imagen");

    boton.addEventListener("click", () => {
        // Seleccionar una imagen aleatoria del arreglo
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        const rutaImagen = imagenes[indiceAleatorio];
        
        // Asignar la imagen aleatoria al src de la etiqueta img
        imgTag.src = rutaImagen;
    });
});
