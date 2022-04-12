/* 
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicacao2(num1:number, num2:number){
    if(num1 < 0 || num2 < 0){
        return "valor invalido";
    }

    return Math.imul(num1, num2);
}

console.log(multiplicacao2(5,5));
console.log(multiplicacao2(0,7));