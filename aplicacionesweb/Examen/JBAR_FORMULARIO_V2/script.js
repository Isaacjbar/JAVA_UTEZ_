document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const listaMascotas = document.getElementById("listaMascotas");

    if (params.has("nombre") && params.has("tipo") && params.has("edad") && params.has("comida") && params.has("correo")) {
        // Obtener los valores de los parámetros de la URL
        const nombre = params.get("nombre");
        const tipo = params.get("tipo");
        const edad = params.get("edad");
        const comida = params.get("comida");
        const correo = params.get("correo");

        // Crear una nueva fila y celdas para la tabla
        const nuevaFila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = nombre;
        nuevaFila.appendChild(celdaNombre);

        const celdaTipo = document.createElement("td");
        celdaTipo.textContent = tipo;
        nuevaFila.appendChild(celdaTipo);

        const celdaEdad = document.createElement("td");
        celdaEdad.textContent = edad;
        nuevaFila.appendChild(celdaEdad);

        const celdaComida = document.createElement("td");
        celdaComida.textContent = comida;
        nuevaFila.appendChild(celdaComida);

        const celdaCorreo = document.createElement("td");
        celdaCorreo.textContent = correo;
        nuevaFila.appendChild(celdaCorreo);

        // Agregar la nueva fila a la tabla
        listaMascotas.appendChild(nuevaFila);
    }
});
