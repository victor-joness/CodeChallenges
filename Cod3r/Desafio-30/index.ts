/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */

function maiormenor2(vetor: number[]){
    let maior = vetor[0];
    let menor = vetor[0];

    for(let i=0; i< vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }

    for(let i=0; i< vetor.length; i++){
        if(vetor[i] < menor){
            menor = vetor[i]
        }
    }

    return `O maior é ${maior} e o menor é ${menor}`
}

let vetor2 = [2,4,5,6,10,13,15,20];

console.log(maiormenor2(vetor2));