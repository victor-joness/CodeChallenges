/* ->01: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

type Numero = {
    num1: number;
    num2: number;
}

function calcalar(num1 : number, num2 : number){
    let soma = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    return `A soma é ${soma},  a subtração é ${sub}, a multiplicação é ${mult}, e a divisão é ${div.toPrecision(2)}`
}


console.log(calcalar(2,3))