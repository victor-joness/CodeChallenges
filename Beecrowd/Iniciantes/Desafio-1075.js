/* 
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number); */

var lines = [13];
console.log(lines[0]);

for(let i = 1; i < 10000; i++){
  if(i % lines[0] == 2){
    console.log(i);
  }
}