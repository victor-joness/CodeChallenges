/* 
Neste problema você deverá ler 15 valores colocá-los em 2 vetores conforme estes valores forem pares ou ímpares. Só que o tamanho de cada um dos dois vetores é de 5 posições. Então, cada vez que um dos dois vetores encher, você deverá imprimir todo o vetor e utilizá-lo novamente para os próximos números que forem lidos. Terminada a leitura, deve-se imprimir o conteúdo que restou em cada um dos dois vetores, imprimindo primeiro os valores do vetor impar. Cada vetor pode ser preenchido tantas vezes quantas for necessário.
*/

/* 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
*/

let lines = [
  "1",
  "3",
  "4",
  "-4",
  "2",
  "3",
  "8",
  "2",
  "5",
  "-7",
  "54",
  "76",
  "789",
  "23",
  "98",
];

let par = [];
let impar = [];

for (let i = 0; i < 15; i++) {
    let num = parseInt(lines.shift());
    
    if (num % 2 === 0) {
        par.push(num);
    } else {
        impar.push(num);
    }
    
    if (par.length === 5) {
        for (let j = 0; j < 5; j++) {
            console.log(`par[${j}] = ${par[j]}`);
        }
        par = [];
    }
    
    if (impar.length === 5) {
        for (let j = 0; j < 5; j++) {
            console.log(`impar[${j}] = ${impar[j]}`);
        }
        impar = [];
    }
}

for (let j = 0; j < impar.length; j++) {
    console.log(`impar[${j}] = ${impar[j]}`);
}

for (let j = 0; j < par.length; j++) {
    console.log(`par[${j}] = ${par[j]}`);
}

