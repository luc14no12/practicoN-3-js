function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

let numero = 5; // Cambia este valor al número que desees verificar
let resultado = esParOImpar(numero);
console.log(resultado);
