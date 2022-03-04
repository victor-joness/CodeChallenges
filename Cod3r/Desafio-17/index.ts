/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumento2(salario: number , plano: string){
    switch(plano){
        case "A":
            return salario * 1.10
        case "B":
            return salario * 1.15
        case "C":
            return salario * 1.20
        default:
            return "plano invalido"
    }
}

console.log(aumento2(1000,"C"))