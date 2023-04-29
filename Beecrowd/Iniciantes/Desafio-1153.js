/* 
Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.
*/

let lines = ["5"];

let valor = parseInt(lines[0]);

let soma = 1;

for(valor; valor >= 1; valor--){
    soma = soma * valor
}

console.log(soma);