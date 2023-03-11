/* Timelimit: 1
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais. */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var nome = String(lines.shift());
var salario = parseFloat(lines.shift());
var montante = parseFloat(lines.shift());

var total = salario + (0.15 * montante);

console.log("TOTAL = R$ " + total.toFixed(2));