/* 
Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de Y ímpares consecutivos a partir de X inclusive o próprio X se ele for ímpar. Por exemplo:
para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13
*/

/* 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
*/

let lines = ["2", "4 3", "11 2"];

let quantidade = parseInt(lines.shift());

for (let i = 0; i < quantidade; i++) {
    let [x, y] = lines[i].split(" ").map((item) => parseInt(item));
    let soma = 0;
    let contador = 0;
    while (contador < y) {
        if (x % 2 !== 0) {
        soma += x;
        contador++;
        }
        x++;
    }
    console.log(soma);
    }

    