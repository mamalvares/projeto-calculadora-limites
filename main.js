function calcularLimiteInfinito() {
    document.getElementById("resultado").innerHTML = "";

    var denominador = document.getElementById("grauDenominador").value;
    var divisor = document.getElementById("grauDivisor").value;

    if (denominador > divisor) {
        document.getElementById("resultado").innerHTML = "O limite dessa função é: <br> ∞";
    } else if (denominador < divisor) {
        document.getElementById("resultado").innerHTML = "O limite dessa função é: <br> 0";
    } else {
        document.getElementById("resultado").innerHTML = "O limite dessa função é: <br>" + denominador + "/" + divisor;
    }
}