/* 
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

var lines = [
  [2, 2],
  [3, -2],
  [-8, -1],
  [-7, 1],
  [0, 2],
];

for (let i = 0; i < lines.length; i++) {
  let [x, y] = lines[i].split(" ").map((item) => parseInt(item));

  if (x == 0 || y == 0) return 0;

  if (x > 0 && y > 0) {
    console.log("primeiro");
  } else if (x < 0 && y > 0) {
    console.log("segundo");
  } else if (x < 0 && y < 0) {
    console.log("terceiro");
  } else if (x > 0 && y < 0) {
    console.log("quarto");
  }
}
