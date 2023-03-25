/* 
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let par = 0;

let arr = [];

for(let i = 0; i < 6; i++){
    if(lines[i] > 0){
        arr.push(lines[i]);
        par++;
    }
}

console.log(par +" valores positivos");
console.log((arr.reduce((acc, value) => acc + value) / par).toFixed(1));