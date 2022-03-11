/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros */

function media2(vetor: number[]){
    let quantidade = vetor.length;
    let soma = 0;

    for(let i = 0; i < quantidade; i++){
        soma = soma + vetor[i]
    }

    let media = soma / quantidade;

    return `A media é de ${media.toFixed(2).replace(".", ",")}`

}

let vetor2 = [2,4,5,6,10,13,15,20];

console.log(media2(vetor2));