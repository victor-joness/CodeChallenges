/* 
Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?
*/

let valor = 1;
let j = 2;

for(let i = 3; i <= 39; i=i+2){
    valor = valor + i/j;
    j = j * 2;
}

console.log(valor.toFixed(2));