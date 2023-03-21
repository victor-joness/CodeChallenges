/* Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
 */

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var valor = 
11257;
var valorinicial = valor;

var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;
var nota1 = 0;

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
    nota1 = parseInt(valor / 1);
    valor = valor - (nota1 * 1);
}

console.log(valorinicial);
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00"); 