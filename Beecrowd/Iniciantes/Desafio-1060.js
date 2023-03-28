/*
    Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let par = 0;

for(let i = 0; i < 6; i++){
    if(lines[i] > 0){
        par++;
    }
}

console.log(par +" valores positivos");