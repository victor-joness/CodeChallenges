/* 
Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

var lines = ["5 4","7 2", "3 8", "2 2"];

for(let i = 0; i< lines.length; i++){
    let [x, y] = lines[i].split(" ").map((item) => parseInt(item));

    if(x == y) return 0;

    if(x > y){
        console.log("Decrescente");
    }else {
        console.log("Crescente");
    }
}