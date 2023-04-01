/* 
Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number); */

var lines = [4, -5, 0, 3, -4];

var quantidade = lines[0];

for(let i = 1; i <= quantidade; i++){
  if(lines[i] > 0){
    if(lines[i] % 2 == 0){
      console.log("EVEN POSITIVE");
    }else{
      console.log("ODD POSITIVE");
    }
  }else if(lines[i] < 0){
    if(lines[i] % 2 == 0){
      console.log("EVEN NEGATIVE");
    }else{
      console.log("ODD NEGATIVE");
    }
  }else{
    console.log("NULL");
    console.log("")
  }
}