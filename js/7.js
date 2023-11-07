function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = parseInt(prompt("Ingresa un numero para generar su tabla de multiplicar:"));

if (!isNaN(numero)) {
    tablaDeMultiplicar(numero);
} else {
    console.log("Porfa, ingresa un numero valido.");
}
