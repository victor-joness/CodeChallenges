/* 
aça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.
*/

let lines = ["-3.5", "3.5", "11.0", "10.0"];

let soma = 0;
let num = 0;

for (let i = 0; i <= lines.length; i++) {
  let nota = parseFloat(lines.shift());
  if (nota < 0 || nota > 10) {
    console.log("nota invalida");
    i--;
  } else {
    num++;
    soma = soma + nota;
    if (num == 2) {
      let media = soma / 2;
      console.log(`media = ${media.toFixed(2)}`);
    }
  }
}
