/* 
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/

//reduce vai passar por todos os elementos do array e ir armazenando eles no acumulador, na ultimo chamada que temos o return
// o acumulador por padrao começa com 0;

const somarNumeros = (array) => {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
console.log(somarNumeros([10, 5, 2, 15]));