document.addEventListener("DOMContentLoaded", () => {
    const imagenes = ["img/papel.jpg", "img/piedra.jpg", "img/tijera.jpeg", "img/hasbulla.png"];
    const boton = document.getElementById("mostrarImagen");

    boton.addEventListener("click", () => {
        if (imagenes.length === 0) {
            alert("No hay más imágenes para mostrar");
            return;
        }

        // Seleccionar una imagen aleatoria del arreglo
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        const rutaImagen = imagenes.splice(indiceAleatorio, 1)[0];

        // Buscar una etiqueta img sin src de manera aleatoria
        const imgTags = document.querySelectorAll("img");
        const imgSinSrc = Array.from(imgTags).filter(img => !img.src);
        if (imgSinSrc.length > 0) {
            const imgAleatoria = imgSinSrc[Math.floor(Math.random() * imgSinSrc.length)];
            imgAleatoria.src = rutaImagen;
        }
    });
});
