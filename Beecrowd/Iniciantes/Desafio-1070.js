/* 
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.
*/

var X = 8; /* parseInt(lines.shift()); */

for(let i = X; i <= X+11; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}