/* 
O seu professor gostaria de fazer um programa com as seguintes características:

Leia os dados de um CPF no formato XXX.YYY.ZZZ-DD;
Imprima os quatro números, sendo um valor por linha.
*/

let lines = ["320.025.102-016"];

let cpf = lines.shift().split("-");

let cpf2 = cpf.shift().split(".");

for(let i = 0; i < cpf2.length; i++) {
    console.log(cpf2[i]);
}

console.log(cpf[0]);