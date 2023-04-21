/* 
Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
*/

let lines = ["7"]

let [x] = lines[0].split(" ").map((item) => parseInt(item));

let j = 1;
for(let i = 0; i < x; i++){
    console.log(`${j} ${j+1} ${j+2} PUM`);
    j = (j+2) + 2;
}