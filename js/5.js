function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena esta formada solo por mayusculas";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena esta formada solo por minusculas";
    } else {
        return "La cadena es una mezcla de mayusculas y minusculas";
    }
}

let texto = "Hola lindo mundo"; 
let resultado = analizarCadena(texto);
console.log(resultado);
