/* 
Dado um número, encontre a soma de todos os múltiplos únicos de números particulares até, mas não incluindo esse número.

Se listarmos todos os números naturais abaixo de 20 que são múltiplos de 3 ou 5, obtemos 3, 5, 6, 9, 10, 12, 15 e 18.

A soma desses múltiplos é 78.
*/

export function sum(array: number[], number: number) {
    let resultado = 0;

    for(let i = 0; i < number; i++){
        if(array.some((arrayNumber) => i % arrayNumber === 0)){
            resultado = resultado + i;
        }
    }

    return resultado;
}


console.log(sum([3, 5], 10))
console.log(sum([3], 7))
console.log(sum([3, 5], 1))
console.log(sum([3, 5], 4))