/* Essas cores são codificadas da seguinte forma:

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
O objetivo deste exercício é criar uma maneira:

para procurar o valor numérico associado a uma faixa de cor específica
para listar as diferentes cores de banda
 */

export const colorCode = (cor: string) => {
    return COLORS.indexOf(cor)
}

export const COLORS = [ 
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

console.log(colorCode('white'))