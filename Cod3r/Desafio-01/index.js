/* ->01: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function calc(num1, num2){
    if( typeof num1 !== "number" || typeof num2 !== "number"){
        return "Uma das entradas é invalida"
    }

    let soma = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;

    return `A soma é ${soma},  a subtração é ${sub}, a multiplicação é ${mult}, e a divisão é ${div.toPrecision(2)}`
}

console.log(calc(2,3));