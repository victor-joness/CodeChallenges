/* 
Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number); */

var lines = [5];

for(let i = 1; i <= 10; i++){
  console.log(`${i} x ${lines[0]} = ${i * lines[0]}`);
}