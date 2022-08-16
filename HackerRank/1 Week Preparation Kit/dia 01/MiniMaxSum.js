/* 
Dados cinco inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco inteiros. Em seguida, imprima os respectivos valores mínimo e máximo como uma única linha de dois inteiros longos separados por espaço.

Exemplo

A soma mínima ée a soma máxima é. A função imprime

16 24
Descrição da função

Complete a função miniMaxSum no editor abaixo.

miniMaxSum tem os seguintes parâmetros:

arr : uma matriz deinteiros
Impressão

Imprima dois inteiros separados por espaço em uma linha: a soma mínima e a soma máxima dedeelementos.

Formato de entrada

Uma única linha de cinco inteiros separados por espaço.

Restrições


Formato de saída

Imprima dois inteiros longos separados por espaços denotando os respectivos valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco inteiros. (A saída pode ser maior que um inteiro de 32 bits.)

Entrada de amostra

1 2 3 4 5
Saída de Amostra

10 14
Explicação

Os números são 1,2,3,4,5 e. Calcule as seguintes somas usando quatro dos cinco inteiros:

Soma tudo, exceto 1, a soma é. 2 + 3 + 4 + 5 = 14;
Soma tudo, exceto 2, a soma é. """"
Soma tudo, exceto 3, a soma é. """"
Soma tudo, exceto 4, a soma é. """"
Soma tudo, exceto 5, a soma é. """"
Dicas: Cuidado com o estouro de números inteiros! Use inteiro de 64 bits.
*/

//obs a funcao aceita array como parametro
let arr1 = [1,3,5,7,9];
let arr2 = [1,2,3,4,5];
let arr3 = [7,69,2,221,8974];

function miniMaxSum(arr) {
    let menor = arr[0];
    let maior = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < menor){
            menor = arr[i];
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i];
        }
    }

    let Resultado = [];
    let parcial = 0;
    let parcial2 = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != menor){
            parcial = parcial + arr[i];
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != maior){
            parcial2 = parcial2 + arr[i];
        }
    }
    Resultado.push(parcial2);
    Resultado.push(parcial);

    return Resultado;
}

console.log(miniMaxSum(arr1));
console.log(miniMaxSum(arr2));
console.log(miniMaxSum(arr3));
//segunda opcao
function miniMaxSum2(arr) {
    const arrayOrdem = arr.sort();

    let soma = 0;
    let soma2 = 0;
    let resultado = [];

    for(let i = arr.length - 2; i >= 0; i--){
        soma = soma + arrayOrdem[i];
    }

    for( let i = 1; i < arr.length; i++){
        soma2 = soma2 + arrayOrdem[i]
    }

    resultado.push(soma);
    resultado.push(soma2);

    return resultado;
}

console.log(miniMaxSum2(arr1));
console.log(miniMaxSum2(arr2));
console.log(miniMaxSum2(arr3));

//ele quer apenas que a gente imprima, entao é so imprimir no lugar de retorna

function miniMaxSum3(arr) {
    const arrayOrdem = arr.sort();

    let soma = 0;
    let soma2 = 0;

    for(let i = arr.length - 2; i >= 0; i--){
        soma = soma + arrayOrdem[i];
    }

    for( let i = 1; i < arr.length; i++){
        soma2 = soma2 + arrayOrdem[i]
    }

    console.log(soma, soma2);
}

console.log(miniMaxSum3(arr1));
console.log(miniMaxSum3(arr2));
console.log(miniMaxSum3(arr3));