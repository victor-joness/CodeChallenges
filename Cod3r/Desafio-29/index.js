/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */


function intervalo(vetor){
    let contador = 0;
    let contador2 = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            contador++
        }else{
            contador2++
        }
    }

    return `A quantidade de numeros dentro do intervalo é ${contador}, e fora é ${contador2}`

}

let vetor = [2,4,5,6,10,13,15,20];

console.log(intervalo(vetor));