/* Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console. */

function push2(vetor1: number[], vetor2: number[]){
    for(let i = 0; i< vetor2.length; i++){
        vetor1.push(vetor2[i]);
    }

    return vetor1;
}

let vetorPilha2 = [1, 2, 3, 4, 5];
let vetorAdiciona2 = [6, 7, 8, 9, 10];

console.log(push2(vetorPilha2,vetorAdiciona2));