/* 
Ler um número inteiro N e calcular todos os seus divisores.
*/

let lines = ["6"];

let x = parseInt(lines[0]);

for(let i = 1; i <= x; i++){
    if(x % i == 0){
        console.log(i);
    }
}