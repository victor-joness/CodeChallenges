/* Leia 2 valores, no caso, variáveis A, B, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal. */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var a = parseInt(lines.shift()).toFixed(1);
var b = parseInt(lines.shift()).toFixed(1);

var notaA = a * 3;
var notaB = b * 7;

var media = (notaA + notaB)/ 10;

console.log("MEDIA = " + media.toFixed(1));