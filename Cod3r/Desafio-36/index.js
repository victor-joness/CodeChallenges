/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function multiplicação(vetor, inteiro){
    for(let i = 0; i < vetor.length; i++){
        if(typeof vetor[i] != "number"){
            return "Um dos elementos do vetor é invalido, aceitamos apenas numeros"
        }
    }

    let resultado = [];
    vetor.forEach(item => {
        resultado.push(item* inteiro)
    });

    return resultado;
}

let vetor = [1,3,5]

console.log(multiplicação(vetor,3));

function multiplicação2(vetor, inteiro){
    for(let i = 0; i < vetor.length; i++){
        if(typeof vetor[i] != "number"){
            return "Um dos elementos do vetor é invalido, aceitamos apenas numeros"
        }
    }

    let resultado = [];
    vetor.forEach(item => {
        if(item > 5){
            resultado.push(item* inteiro)
        }
    });

    if(resultado != ""){
        return resultado
    }else{}
    return "Nenhum elemnto do vetor maior que 5"
}

let vetor2 = [1,3,5]

console.log(multiplicação2(vetor2,3));



