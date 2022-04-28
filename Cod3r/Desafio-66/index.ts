/* 
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
*/

let vogais2 = ["a", "e", "i", "o", "u"];

const removerVogais2 = (string:string) => {
    let resultado = "";

    for(let i = 0; i < string.length; i++){
        if(!vogais2.includes(string[i])){
            resultado = resultado.concat(string[i]);
        }
    }

    return resultado;
}

console.log(removerVogais2("Cod3r"));
console.log(removerVogais2("Fundamentos"));