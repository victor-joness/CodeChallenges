/* 
Escreva um programa que leia um valor inteiro N. N * 2 linhas de saída serão apresentadas na execução do programa, seguindo a lógica do exemplo abaixo. Para valores com mais de 6 dígitos, todos os dígitos devem ser apresentados.
*/

/* 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
*/

let lines = ['5'];

let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
    console.log(`${i} ${i ** 2 + 1} ${i ** 3 + 1}`);
}