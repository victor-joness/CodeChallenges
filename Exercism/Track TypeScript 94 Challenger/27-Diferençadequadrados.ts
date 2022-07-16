/* 
Encontre a diferença entre o quadrado da soma e a soma dos quadrados dos N primeiros números naturais.

O quadrado da soma dos dez primeiros números naturais é (1 + 2 + ... + 10)² = 55² = 3025.

A soma dos quadrados dos dez primeiros números naturais é 1² + 2² + ... + 10² = 385.

Portanto, a diferença entre o quadrado da soma dos dez primeiros números naturais e a soma dos quadrados dos dez primeiros números naturais é 3025 - 385 = 2640.

Não se espera que você descubra uma solução eficiente para isso a partir dos primeiros princípios; a pesquisa é permitida, na verdade, incentivada. Encontrar o melhor algoritmo para o problema é uma habilidade chave na engenharia de software.
*/

export class Squares {
    count: number;
    constructor(count: number) {
        this.count = count;
    }

    get sumOfSquares(): number {
        let potencia = 0;
        for(let i = 0; i <= this.count; i++){
            potencia = potencia + (i ** 2);
        }
        return potencia;
    }

    get squareOfSum(): number {
        let soma = 0;
        for(let i = 0; i <= this.count; i++){
            soma = soma + i;
        }
        let potencia = soma ** 2;
        return potencia;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares
    }
}

const teste = new Squares(10);
console.log(teste.squareOfSum)
console.log(teste.sumOfSquares)
console.log(teste.difference)