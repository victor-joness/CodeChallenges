/* A Conjectura de Collatz ou problema 3x+1 pode ser resumida da seguinte forma:

Tome qualquer inteiro positivo n. Se n for par, divida n por 2 para obter n / 2. Se n for ímpar, multiplique n por 3 e adicione 1 para obter 3n + 1. Repita o processo indefinidamente. A conjectura afirma que não importa com qual número você comece, você sempre chegará a 1 eventualmente.

Dado um número n, retorne o número de passos necessários para chegar a 1.

Exemplos
Começando com n = 12, os passos seriam os seguintes:

12
6
3
10
5
16
8
4
2
1
Resultando em 9 passos. Assim, para a entrada n = 12, o valor de retorno seria 9.
*/

export function steps(count: number):number {
    if(count <= 0){
        throw new Error('Only positive numbers are allowed')
    }

    let numero = count;
    let contador = 0;

    for(let i = 0; numero > 1; i++){
        if(numero % 2 == 0){
            numero = numero / 2;
            contador++
        }else{
            numero = (numero * 3) + 1;
            contador++
        }
    }

    return contador;
}

console.log(steps(12));