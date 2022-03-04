/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumento(salario, plano){
    if( typeof salario !== "number"){
        return "Uma das entradas é invalida"
    }
    if( typeof plano !== "string"){
        return "Uma das entradas é invalida"
    }

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

console.log(aumento(1000,"C"))