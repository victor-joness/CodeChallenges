/* 
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repetir2(elemento:any, quantidade:number):Array<any>{
    let resultado = [];

    for(let i = 0; i < quantidade; i++){
        resultado.push(elemento);
    }

    return resultado;
}

console.log(repetir2("código", 2));
console.log(repetir2(7, 3))