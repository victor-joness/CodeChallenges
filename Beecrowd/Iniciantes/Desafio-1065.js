/* Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação. */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let par = 0;

for(let i = 0; i < 5; i++){
    if(lines[i] % 2 == 0){
        par++;
    }
}

console.log(par + " valores pares");