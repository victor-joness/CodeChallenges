/* 
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
*/

let vogais = ["a", "e", "i", "o", "u"];

const removerVogais = (string) => {
    let resultado = "";

    for(let i = 0; i < string.length; i++){
        if(!vogais.includes(string[i])){
            resultado = resultado.concat(string[i]);
        }
    }

    return resultado;
}

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));