/* 
Na matemática, um número perfeito é um número inteiro para o qual a soma de todos os seus divisores positivos próprios (excluindo ele mesmo) é igual ao próprio número. Por exemplo o número 6 é perfeito, pois 1+2+3 é igual a 6. Sua tarefa é escrever um programa que imprima se um determinado número é perfeito ou não.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

let lines = ["3", "6", "5", "28"];

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    let x = parseInt(lines.shift());
    let soma = 0;
    
    for (let j = 1; j < x; j++) {
        if (x % j === 0) {
        soma += j;
        }
    }
    
    if (soma === x) {
        console.log(`${x} eh perfeito`);
    } else {
        console.log(`${x} nao eh perfeito`);
    }
}