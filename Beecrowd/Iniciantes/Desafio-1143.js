/* 
Escreva um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
*/

let lines = ["5"]

let [x] = lines[0].split(" ").map((item) => parseInt(item));

let j = 1;
for(let i = 0; i < x; i++){
    console.log(`${j} ${j*j} ${j*j*j}`);
    j = j+1;
}