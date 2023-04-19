/* 
Escreva um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível mostre a mensagem “divisao impossivel” para os valores em questão.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

var lines = [[3], [3, -2], [-8, 0], [0, 8]];

let quantidade = parseInt(lines[0]);

for (let i = 1; i <= quantidade; i++) {
  let [x, y] = lines[i].split(" ").map((item) => parseInt(item));;
  x = parseInt(x);
  y = parseInt(y);
  if (y === 0) {
    console.log("divisao impossivel");
  } else {
    let divisao = x / y;
    console.log(divisao.toFixed(1));
  }
}
