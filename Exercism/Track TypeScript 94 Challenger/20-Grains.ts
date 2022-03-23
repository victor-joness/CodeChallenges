/* Calcule o número de grãos de trigo em um tabuleiro de xadrez, dado que o número em cada quadrado dobra.

Era uma vez um servo sábio que salvou a vida de um príncipe. O rei prometeu pagar o que o servo pudesse imaginar. Sabendo que o rei adorava xadrez, o servo disse ao rei que gostaria de ter grãos de trigo. Um grão na primeira casa de um tabuleiro de xadrez, com o número de grãos dobrando em cada casa sucessiva.

Existem 64 quadrados em um tabuleiro de xadrez (onde o quadrado 1 tem um grão, o quadrado 2 tem dois grãos e assim por diante).

Escreva um código que mostre:

quantos grãos havia em um determinado quadrado, e
o número total de grãos no tabuleiro de xadrez
Você precisará usar o tipo bigint neste problema, pois o numbertipo usual perde precisão quando em números grandes, sendo um armazenamento baseado em ponto flutuante.
 */

//total de graos determinado pela casa do tabuleiro
export const square = (numero: number) => {
    if(numero <= 0 || numero > 64){
        throw new Error('algum valor de entrada errada')
    }

    if(numero == 1){
        return BigInt(1)
    }

    let resultado = BigInt(2 ** (numero - 1) );

    return resultado;
}
  

//total de grãos no tabuleiro
export const total = () => {
    let soma = BigInt(0)
    for(let i = 0; i < 64; i++){
        let graoatual = BigInt(2 ** i);
        soma = soma + graoatual;
    }

    return soma;
}
  
console.log(square(1))
console.log(square(2))
console.log(square(3))
console.log(square(4))
console.log(square(16))
console.log(square(32))
console.log(total())

