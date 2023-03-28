
/* Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos. */

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */
var lines = [-5
    ,0
    ,-3
    ,-4
    ,12]/* input.split('\n').map(Number); */

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for(let i = 0; i < 5; i++){
    if(lines[i] %2 == 0){
        par++;
    }else{
        impar++;
    }

    if(lines[i] > 0){
        positivo++;
    }else if(lines[i] < 0){
        negativo++;
    }
}

console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(positivo + " valor(es) positivo(s)");
console.log(negativo + " valor(es) negativo(s)");