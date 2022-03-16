/* As primeiras 2 bandas de um resistor têm um esquema de codificação simples: cada cor mapeia para um único número. Por exemplo, se eles imprimissem uma faixa marrom (valor 1) seguida por uma faixa verde (valor 5), isso seria traduzido para o número 15.

Neste exercício, você criará um programa útil para que não precise se lembrar dos valores das bandas. O programa receberá nomes de cores como entrada e emitirá um número de dois dígitos, mesmo que a entrada seja mais de duas cores!

As cores das bandas são codificadas da seguinte forma:

Preto: 0
Marrom: 1
Vermelho 2
Laranja: 3
Amarelo: 4
Verde: 5
Azul: 6
Violeta: 7
Cinza: 8
Branco: 9
Do exemplo acima: marrom-verde deve retornar 15 marrom-verde-violeta deve retornar 15 também, ignorando a terceira cor.
 */

//ou seja ele quer a concatenação e nao a soma 

export function decodedValue( array: string[]){
    let soma = "";
    
    for(let i = 0; i < 2; i++){
        if(COLORS.indexOf(array[i]) != -1){
            soma = soma + COLORS.indexOf(array[i])
        }
    }
    return Number(soma);
}

const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
]

console.log(decodedValue(['blue', 'grey']))