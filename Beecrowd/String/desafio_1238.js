/* 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
*/

let lines = ["2",
    "Tpo oCder",
    "aa bb"]

let quantidade = parseInt(lines.shift());

for(let i = 0; i < quantidade;i++){
    let [a, b] = lines.shift().split(' ');
    let maior = a.length > b.length ? a.length : b.length;
    let palavra = '';
    for(let j = 0; j < maior; j++){
        if(a[j] != undefined) palavra += a[j];
        if(b[j] != undefined) palavra += b[j];
    }
    console.log(palavra);
}