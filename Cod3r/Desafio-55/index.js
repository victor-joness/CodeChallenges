/* 
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

const receberSomenteOsParesDeIndicesPares = (array) => {
    let resultado = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0 && i % 2 == 0){
            resultado.push(array[i])
        }
    }

    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
