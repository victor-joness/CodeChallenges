/* 
Este governo, como todos os anos, está muito preocupado com a folha de pagamentos. Neste ano, porém, a maneira que os pagamentos serão efetuados será trocada. Ao invés de pagar os funcionários como de costumo, a formula utilizada para calcular os salários será mais simples: A soma dos divisores do número de matrícula do funcionário.

Para evitar fraudes, ajude o governo a fazer este cálculo!
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

let lines = ["7", "1", "2", "3", "4", "50", "60", "77"];

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
  let num = parseInt(lines.shift());
  let soma = 0;
  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      soma += j;
    }
  }
  console.log(soma);
}

