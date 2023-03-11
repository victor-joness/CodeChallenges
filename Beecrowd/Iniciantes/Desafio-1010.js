

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var primeiro = (lines.shift()).split(" ");
var segundo = (lines.shift()).split(" ");

var somaprimeiro = primeiro[1] * primeiro[2];
var somasegundo = segundo[1] * segundo[2];

var soma = somaprimeiro + somasegundo;

console.log("VALOR A PAGAR: R$ " + soma.toFixed(2));