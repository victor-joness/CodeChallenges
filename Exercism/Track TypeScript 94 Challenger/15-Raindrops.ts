/* Sua tarefa é converter um número em uma string que contém sons de gotas de chuva correspondentes a certos fatores potenciais. Um fator é um número que se divide uniformemente em outro número, sem deixar resto. A maneira mais simples de testar se um número é um fator de outro é usar a operação de módulo .

As regras de raindropssão que, se um determinado número:

tem 3 como fator, adicione 'Pling' ao resultado.
tiver 5 como fator, adicione 'Plang' ao resultado.
tem 7 como fator, adicione 'Plong' ao resultado.
não tiver 3, 5 ou 7 como fator, o resultado deve ser os dígitos do número.
Exemplos
28 tem 7 como fator, mas não 3 ou 5, então o resultado seria "Plong".
30 tem 3 e 5 como fatores, mas não 7, então o resultado seria "PlingPlang".
34 não é fatorado por 3, 5 ou 7, então o resultado seria "34".
*/

export function convert(numero: number) {
    let resultado = ""
    if(numero % 3 == 0){
        resultado += "Pling"
    }
    if(numero % 5 == 0){
        resultado += "Plang"
    }
    if(numero % 7 == 0){
        resultado += "Plong"
    }
    if((numero % 3 != 0) && (numero % 5 != 0) && (numero % 7 != 0)){
        return numero.toString()
    }

    return resultado
}

console.log(convert(3))
console.log(convert(5))
console.log(convert(7))
console.log(convert(15))
console.log(convert(52))