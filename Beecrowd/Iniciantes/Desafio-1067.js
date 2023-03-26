/* 
Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.
*/

var X = 8; /* parseInt(lines.shift()); */

for(let i = 0; i <= X;i++){
    if(i % 2 == 1){
        console.log(i);
    }
}