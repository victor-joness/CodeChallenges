
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var primeiro = (lines.shift()).split(" ");

var a = parseFloat(primeiro[0]);
var b = parseFloat(primeiro[1]);
var c = parseFloat(primeiro[2]);

var triangulo = parseFloat(a * c) / 2);
var circulo = (3.14159 * (c * c));
var trapezio = (((a + b) * c) / 2);
var quadrado = b * b;
var retangulo = a * b;


console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));