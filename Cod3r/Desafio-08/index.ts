/* - 08: Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

function basquete2(string : string){
    let vetor = string.split(" ");
    let menor = vetor[0];
    for(let i = 0; i< vetor.length; i++){
        if( menor > vetor[i]){
            menor = vetor[i]
        }
    }

    let inicio = parseInt(vetor[0]);
    let contador = 0;

    for(let i = 0; i < vetor.length; i++){
        if(parseInt(vetor[i]) > inicio){
            inicio = parseInt(vetor[i])
            contador++
        }
    }

    return `O menor pontuação dele foi:  ${menor}, e foi no jogo de número : ${vetor.indexOf(menor) + 1}, e ele bateu seu record ${contador} vezes} `
}

console.log(basquete2("10 20 20 8 25 3 0 30 1"));