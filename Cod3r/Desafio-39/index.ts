/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function troca2(vetor1: number[], vetor2:number[]){
    if(vetor1.length != vetor2.length){
        return "verifique se os vetores tem o mesmo tamanho"
    }

    let resultado = []  
    let resultado2 = []
    for(let i = 0; i< vetor1.length;i++){
        resultado.push(vetor1[i])
    }

    for(let i = 0; i< vetor2.length;i++){
        resultado.push(vetor2[i])
    }

    for(let i = 0; i < vetor1.length; i++){
        resultado2.push(resultado.shift())
    }
    
    return `Vetor A = ${resultado} e Vetor B = ${resultado2}`
}

let vetor11 = [1,2,3,4];
let vetor22 = [5,6,7,9];

console.log(troca2(vetor11, vetor22));

//resposta

let trocarElemento2 = (vetorA: number[], vetorB: number[]) => {
    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        return `Vetor A = ${vetorA} e Vetor B = ${vetorB}`
    } else {
        return 'Verifique se os arrays são iguais em quantidade'
    }
}

let vetor33 = [1, 2, 3]
let vetor44 = [5, 8, 9]
let vetor33erro = []

console.log(trocarElemento2(vetor33, vetor44))