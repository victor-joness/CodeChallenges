/* 
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

function Simbolomais2(quantidade:number):string{
    let resultado = ""
    for(let i = 0; i < quantidade; i++){
        resultado = resultado.concat("+");
    }

    return resultado;
}

console.log(Simbolomais2(4));
console.log(Simbolomais2(2));