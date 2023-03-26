/* 
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.
*/

var X = 6; /* parseInt(lines.shift()); */
var Y = -5; /* parseInt(lines.shift()); */

let maior = 0;
let menor = 0;
let soma = 0;

if(X > Y){
    maior = X;
    menor = Y;
}else{
    maior = Y;
    menor = X;
}

menor = menor + 1;

for(menor; menor < maior; menor++){
    if(menor % 2 == 1 || menor % 2 == -1){
        soma = soma + menor
    }
}

console.log(soma);