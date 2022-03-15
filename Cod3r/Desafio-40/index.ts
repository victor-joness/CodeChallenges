/*  Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function notas2(vetor: number[]){
    let resultado = []
    for(let i = 0; i< vetor.length; i++){
        if(vetor[i] > 0 && vetor[i] <= 4.9){
            resultado.push("Nota D");
        }else if(vetor[i] > 4.9 && vetor[i] <= 6.9){
            resultado.push("Nota C");
        }else if(vetor[i] > 6.0 && vetor[i] < 8.9){
            resultado.push("Nota B");
        }else if(vetor[i] > 8.9 && vetor[i] < 10){
            resultado.push("Nota A")
        }
    }

    return resultado;
}

let notass2 = [3.5,6,7.2,9.6];

console.log(notas2(notass2))