/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

function multiplicação4(vetor: number[], inteiro: number){

    let resultado = [];
    vetor.forEach(item => {
        resultado.push(item* inteiro)
    });

    return resultado;
}

let vetor4 = [1,3,5]

console.log(multiplicação4(vetor4,3));

function multiplicação3(vetor: number[], inteiro: number){
    for(let i = 0; i < vetor.length; i++){
        if(typeof vetor[i] != "number"){
            return "Um dos elementos do vetor é invalido, aceitamos apenas numeros"
        }
    }

    let resultado2 = [];
    vetor.forEach((item: number) => {
        if(item > 5){
            resultado2.push(item* inteiro)
        }
    });

    if(resultado2.toString() != ""){
        return resultado2
    }else{}
    return "Nenhum elemnto do vetor maior que 5"
}

let vetor3 = [1,3,5]

console.log(multiplicação3(vetor3,3));