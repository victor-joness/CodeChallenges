/* 
Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

var lines = [
  "0",
  "000",
  "1010",
  "1231",
  "999999999",
  "1323",
  "2020",
  "2002",
  "2133",
];

let senha = "2002";

for (let i = 0; i < lines.length; i++) {
  if (senha != lines[i]) {
    console.log("Senha Invalida");
  } else {
    console.log("Acesso Permitido");
    return 0;
  }
}
