/* 
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.
*/

var valor = 91.01;
var valorinicial = valor;

var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;

var moeda1 = 0;
var moeda050 = 0;
var moeda025 = 0;
var moeda010 = 0;
var moeda005 = 0;
var moeda001 = 0;

if(valor > 100){
    nota100 = parseInt(valor / 100);
    valor = valor - (nota100 * 100);
}
if(valor > 50){
    nota50 = parseInt(valor / 50);
    valor = valor - (nota50 * 50);
}
if(valor > 20){
    nota20 = parseInt(valor / 20);
    valor = valor - (nota20 * 20);
}
if(valor > 10){
    nota10 = parseInt(valor / 10);
    valor = valor - (nota10 * 10);
}
if(valor > 5){
    nota5 = parseInt(valor / 5);
    valor = valor - (nota5 * 5);
}

if(valor >= 2){
    nota2 = parseInt(valor / 2);
    valor = valor - (nota2 * 2)
}
if(valor >= 1){
    moeda1 = parseInt(valor / 1);
    valor = valor - (moeda1 * 1);
}
if(valor >= 0.5){
    moeda050 = parseInt(valor / 0.5);
    valor = valor - (moeda050 * 0.5);
}
if(valor >= 0.25){
    moeda025 = parseInt(valor / 0.25);
    valor = valor - (moeda025 * 0.25);
}
if(valor >= 0.10){
    moeda010 = parseInt(valor / 0.10);
    valor = valor - (moeda010 * 0.10);
}
if(valor >= 0.05){
    moeda005 = parseInt(valor / 0.05);
    valor = valor - (moeda005 * 0.05);
}
if(valor >= 0.01){
    moeda001 = parseInt(valor / 0.01);
    valor = valor - (moeda001 * 0.01);
}

console.log("NOTAS:");
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log("MOEDAS:");
console.log(moeda1 + " moeda(s) de R$ 1,00"); 
console.log(moeda050 + " moeda(s) de R$ 0.50");
console.log(moeda025 + " moeda(s) de R$ 0.25");
console.log(moeda010 + " moeda(s) de R$ 0.10");
console.log(moeda005 + " moeda(s) de R$ 0.05");
console.log(moeda001 + " moeda(s) de R$ 0.01");

/* correta , estava dando error por causa do 0.00001, temos q somar isso, e eu n ão sabia pq*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a]= input.split()
var valor = parseFloat(a)
let cedula = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let aux = 0
console.log("NOTAS:")
for (let i = 0; i < 6; i++) {
    aux = parseInt(valor / cedula[i])
    console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`)
    valor = valor % cedula[i]
}
console.log("MOEDAS:")
for (let j = 6; j < cedula.length; j++) {
    aux = parseInt(valor / cedula[j])
    console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`)
    valor = valor % cedula[j] + 0.00001
}