const apariciones = [];

for(let i = 0 ; i <= 12; i++){
apariciones.push(0);
}
for(let indiceAparicion =0; indiceAparicion<50; indiceAparicion++){
let numeroAleatorio = Math.floor(Math.random() *6) + 1;
let numeroAleatorio2 = Math.floor(Math.random () *6) +1;
let sumaDeNumeroRandom = numeroAleatorio + numeroAleatorio2;

apariciones[sumaDeNumeroRandom]++;
}
document.write(`<table>`);
document.write(`<thead><tr> <th>numero</th> <th>apariciones</th> </tr></thead>`);

for(let i = 2; i<= 12; i++){
document.write(`<tbody><tr><td>${i}</td> <td>${apariciones[i]}</td> </tr> </tbody>`);
}
document.write(`</table>`);




