/* 
Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */
/* var lines = input.split('\n').split(); */

var lines = ["5 2", "6 3", "5 0"];

//separa os valores por espaço
/* console.log("victor".split(" ")); */

//ensinar a converter os valores de string para inteiro
/* console.log(lines[0].split(" ").map((item) => parseInt(item))[0]); */

for (let i = 0; i < lines.length; i++) {
  let [x, y] = lines[i].split(" ").map((item) => parseInt(item));

  if (x <= 0 || y <= 0) return 0;

  /* let maior = x > y ? x : y; */
  
    if(x > y){
        maior = x;
    }else{
        maior = y;
    }
 
  let menor = x < y ? x : y;
  let soma = 0;

  let resultado = [];

  for (let i = menor; i <= maior; i++) {
    soma = soma + i;
    resultado.push(i);
  }
  resultado.push("Sum=" + soma);

  console.log(resultado.join(" "));
}
