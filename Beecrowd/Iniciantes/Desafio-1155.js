/* 
Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
S = 1 + 1/2 + 1/3 + … + 1/100
*/

let valor = 1;

for(let i = 2; i <= 100; i++){
    valor = valor + 1/i;
}

console.log(valor.toPrecision(3));