function calcularPerimetro(ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
}

let ladoA = parseFloat(prompt("Ingresa el valor del lado A del rectangulo:"));
let ladoB = parseFloat(prompt("Ingresa el valor del lado B del rectangulo:"));

if (isNaN(ladoA) || isNaN(ladoB)) {
    console.log("Por favor, ingresa numeros validos para los lados del rectangulo.");
} else {
    let perimetro = calcularPerimetro(ladoA, ladoB);
    console.log("El perimetro del rectangulo es: " + perimetro);
}
