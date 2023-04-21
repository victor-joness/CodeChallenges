/* 
Escreva um programa que leia 2 valores X e Y e que imprima todos os valores entre eles cujo resto da divisão dele por 5 for igual a 2 ou igual a 3.
*/

let lines = ["12", "7"];

let [x] = lines[0].split(" ").map((item) => parseInt(item));
let [y] = lines[1].split(" ").map((item) => parseInt(item));

if(x < y){
    x = x + 1;
    y = y - 1;
    for(x; x < y; x++){
        if(x % 5 == 2 || x % 5 == 3){
            console.log(x);
        }
    }
}else{
    x = x - 1;
    y = y + 1;
    for(y; y < x; y++){
        if(y % 5 == 2 || y % 5 == 3){
            console.log(y);
        }
    }
}