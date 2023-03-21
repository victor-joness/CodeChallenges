/* 
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let mes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let escolha = lines[0] - 1;

console.log(mes[escolha]);