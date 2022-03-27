/* 
Vamos fazer o Transformpasso de um Extract-Transform-Load.

ETL
Extract-Transform-Load (ETL) é uma maneira elegante de dizer: "Temos alguns dados legados grosseiros neste sistema e agora precisamos deles neste novo sistema brilhante aqui, então vamos migrar isso. "

(Normalmente, isso é seguido por: "Só vamos precisar executar isso uma vez." Isso é normalmente seguido por muitos tapas na testa e gemidos sobre o quão estúpidos poderíamos ser.)

O objetivo
Vamos extrair algumas pontuações do Scrabble de um sistema legado.

O antigo sistema armazenava uma lista de letras por pontuação:

1 ponto: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
2 pontos: "D", "G",
3 pontos: "B", "C", "M", "P",
4 pontos: "F", "H", "V", "W", "Y",
5 pontos: "K",
8 pontos: "J", "X",
10 pontos: "Q", "Z",
O novo e brilhante sistema Scrabble armazena a pontuação por letra, o que torna muito mais rápido e fácil calcular a pontuação de uma palavra. Ele também armazena as letras em minúsculas, independentemente do caso das letras de entrada:

"a" vale 1 ponto.
"b" vale 3 pontos.
"c" vale 3 pontos.
"d" vale 2 pontos.
etc.
Sua missão, caso você opte por aceitá-la, é transformar o formato de dados legado para o novo formato brilhante.

Notas
Uma nota final sobre pontuação, Scrabble é jogado em todo o mundo em uma variedade de idiomas, cada um com sua própria tabela de pontuação exclusiva. Por exemplo, um "E" é pontuado em 2 na versão em idioma maori do jogo enquanto é pontuado em 4 na versão em idioma havaiano.

*/



export function transform(input: { [key: string]: string[] }): {
    [key: string]: number
  } {
    const phase1: { [key: string]: number } = {}
  
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        const value = input[key]
        for (const each of value) {
          phase1[each.toLowerCase()] = Number.parseInt(key, 10)
        }
      }
    }
    return phase1
}

console.log(transform({
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  }));