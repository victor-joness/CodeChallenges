/* Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos. */

/* let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n"); */

let array = [7 ,21 ,-14]; /* lines.shift().trim().split(" "); */
let arr = [...array];

function compararNumeros(a, b) {
  return a - b;
}

for (let i = 0; i < array.length; i++) {
  let arrayb = array.sort(compararNumeros);
  console.log(arrayb[i]);
}

console.log("\n")

for (let i = 0; i < array.length; i++) {
  console.log(arr[i]);
}