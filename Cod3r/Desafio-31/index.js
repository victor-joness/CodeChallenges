/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function negativos(vetor){
    let contador = 0;

    for(let i = 0; i< vetor.length; i++){
        if(vetor[i] < 0){
            contador++
        }
    }

    return `A quantidade de numeros negativos é de ${contador}`
}

let vetor = [-1,1,2,-3,-4,5];

console.log(negativos(vetor));