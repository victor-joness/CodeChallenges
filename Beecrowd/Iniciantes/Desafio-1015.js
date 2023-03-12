/* 
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =

O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var primeiro = (lines.shift()).split(" ");
var segundo = (lines.shift()).split(" ");

var x1 = parseFloat(primeiro[0]);
var y1 = parseFloat(primeiro[1]);

var x2 = parseFloat(segundo[0]);
var y2 = parseFloat(segundo[1]);

var distancia = Math.sqrt( ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)) );

console.log(distancia.toFixed(4));