/* 
O programa deve ler um valor inteiro X indefinidas vezes. (O programa irá parar quando o valor de X for igual a 0). Para cada X lido, imprima a soma dos 5 pares consecutivos a partir de X, inclusive o X , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.
*/

let lines = ["4", "11", "0"];

let k = 0;

for (let i = 0; i < lines.length; i++) {
  let [x] = lines[i].split(" ").map((item) => parseInt(item));

  if (x == 0) return 0;

  let soma = 0;

  if (x % 2 == 0) {
    for (let j = 0; j < 5; j++) {
      soma = soma + x;
      x = x + 2;
    }
  } else {
    for (let j = 0; j < 5; j++) {
      soma = soma + x;
      x = x + 2;
    }

    soma = soma + 5;
  }
  console.log(soma);
}

50;
60;
80;
70;
110;
50;
