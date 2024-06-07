document.addEventListener("DOMContentLoaded", () => {
    const registrarBtn = document.getElementById("registrar");
    const listaMascotas = document.getElementById("listaMascotas");

    registrarBtn.addEventListener("click", () => {
        // Obtener los valores de los inputs
        const nombreMascota = document.getElementById("nombreMascota").value;
        const tipoMascota = document.getElementById("tipoMascota").value;
        const edadMascota = document.getElementById("edadMascota").value;
        const comidaFavorita = document.getElementById("comidaFavorita").value;
        const correoDueño = document.getElementById("correoDueño").value;

        // Crear una nueva fila y celdas para la tabla
        const nuevaFila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = nombreMascota;
        nuevaFila.appendChild(celdaNombre);

        const celdaTipo = document.createElement("td");
        celdaTipo.textContent = tipoMascota;
        nuevaFila.appendChild(celdaTipo);

        const celdaEdad = document.createElement("td");
        celdaEdad.textContent = edadMascota;
        nuevaFila.appendChild(celdaEdad);

        const celdaComida = document.createElement("td");
        celdaComida.textContent = comidaFavorita;
        nuevaFila.appendChild(celdaComida);

        const celdaCorreo = document.createElement("td");
        celdaCorreo.textContent = correoDueño;
        nuevaFila.appendChild(celdaCorreo);

        // Agregar la nueva fila a la tabla
        listaMascotas.appendChild(nuevaFila);

        // Limpiar el formulario
        document.getElementById("registroMascota").reset();
    });
});
