/* 
Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.
*/

var lines = [[4], [15, 99], [16, 55], [17, 66], [18, 44]];

let N = lines[0][0];

for (let i = 1; i <= N; i++) {
  let [X, Y] = lines[i].split(" ").map(item => parseInt(item));
  let soma = 0;
  if (X > Y) {
    for (let j = Y + 1; j < X; j++) {
      if (j % 2 !== 0) {
        soma += j;
      }
    }
  } else if (Y > X) {
    for (let j = X + 1; j < Y; j++) {
      if (j % 2 !== 0) {
        soma += j;
      }
    }
  }
  console.log(parseInt(soma));
}
