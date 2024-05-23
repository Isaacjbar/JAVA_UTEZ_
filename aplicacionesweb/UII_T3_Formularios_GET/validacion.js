function validarFormulario() {
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    if (contrasena.length < 5) {
        alert("Tu contraseña es insegura. Debe tener al menos 5 caracteres.");
        return false;
    }

    return true;
}
