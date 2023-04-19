/* 
Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.
*/

let lines = ["200","100"];

let [x] = lines[0].split(" ").map((item) => parseInt(item));
let [y] = lines[1].split(" ").map((item) => parseInt(item));
let soma = 0;

if(x < y){
    for(x; x <= y; x++){
        console.log(x)
        if(x % 13 != 0){
            soma = soma + x;
        }
    }
}else{
    for(y; y <= x; y++){
        if(y % 13 != 0){
            soma = soma + y;
        }
    }
}

console.log(soma);

