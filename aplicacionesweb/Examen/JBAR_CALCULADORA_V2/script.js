document.addEventListener("DOMContentLoaded", () => {
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const resultado = document.getElementById("resultado");

    document.getElementById("sumar").addEventListener("click", () => {
        const res = parseFloat(numero1.value) + parseFloat(numero2.value);
        resultado.value = res;
    });

    document.getElementById("restar").addEventListener("click", () => {
        const res = parseFloat(numero1.value) - parseFloat(numero2.value);
        resultado.value = res;
    });

    document.getElementById("multiplicar").addEventListener("click", () => {
        const res = parseFloat(numero1.value) * parseFloat(numero2.value);
        resultado.value = res;
    });

    document.getElementById("dividir").addEventListener("click", () => {
        const divisor = parseFloat(numero2.value);
        if (divisor !== 0) {
            const res = parseFloat(numero1.value) / divisor;
            resultado.value = res;
        } else {
            resultado.value = "Error: División por cero";
        }
    });
});
