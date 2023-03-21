/* Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais. */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var numero = parseInt(lines.shift());
var horasTrab = parseInt(lines.shift());
var valor = parseFloat(lines.shift()).toFixed(2);

var salario = parseFloat(horasTrab * valor).toFixed(2);

console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + salario);