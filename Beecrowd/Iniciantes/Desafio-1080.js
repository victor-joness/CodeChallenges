/* 
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number); */

var lines = [2, 113, 45, 34565, 6];

let maior = 0;
let pos = 0;

for (let i = 0; i < 100; i++) {
  if (lines[i] > maior) {
    maior = lines[i];
    pos = i + 1;
  }
}

console.log(maior);
console.log(pos);
