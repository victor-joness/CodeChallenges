/* 
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

lines = [
  [10],
  [10, "C"],
  [6,"R"],
  [15, "S"],
  [5, "C"],
  [14, "R"],
  [9, "C"],
  [6, "R"],
  [8, "S"],
  [5, "C"],
  [14, "R"],
];

let coelho = 0;
let rato = 0;
let sapo = 0;

for (let i = 1; i < lines.length; i++) {
  const [quantidade, tipo] = lines[i].split(" ");

  if (tipo == "C") {
    coelho += parseInt(quantidade);
  } else if (tipo == "R") {
    rato += parseInt(quantidade);
  } else if (tipo == "S") {
    sapo += parseInt(quantidade);
  }
}

const total = coelho + rato + sapo;

console.log("Total: " + total + " cobaias");
console.log("Total de coelhos: " + coelho);
console.log("Total de ratos: " + rato);
console.log("Total de sapos: " + sapo);
console.log(
  "Percentual de coelhos: " + ((coelho / total) * 100).toFixed(2) + " %"
);
console.log("Percentual de ratos: " + ((rato / total) * 100).toFixed(2) + " %");
console.log("Percentual de sapos: " + ((sapo / total) * 100).toFixed(2) + " %");
