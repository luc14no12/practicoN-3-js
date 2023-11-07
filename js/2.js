let ciudades = [];

while (true) {
    let ciudad = prompt("Ingresa el nombre de una ciudad:");
    if (ciudad === null) {
        break;
    }
    ciudades.push(ciudad);
}

document.write("El arreglo de ciudades tiene " + ciudades.length + " elementos<br>");

document.write("Elemento 1ra posicion: " +ciudades[0] +"<br>");
document.write("Elemento 3ra posicion: " + ciudades[2] + "<br>");
document.write("Elemento ultima posicion: " +ciudades[ciudades.length - 1] + "<br>");

ciudades.push("Paris");

ciudades.splice(1, 1, "Barcelona"); 

document.write("Arreglo de ciudades<br>");
for (let i = 0; i < ciudades.length; i++) {
    document.write("Elemento: " + ciudades[i] +"<br>");
}
