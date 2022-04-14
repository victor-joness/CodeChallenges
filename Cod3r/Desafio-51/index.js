/* 
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
*/

function receberPrimeiroEUltimoElemento(array){
    let resultado = [];

    resultado.push(array[0]);
    resultado.push(array[array.length - 1]);

    return resultado;
}

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));