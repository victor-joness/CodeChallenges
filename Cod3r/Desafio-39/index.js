/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function troca(vetor1, vetor2){
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

let vetor1 = [1,2,3,4];
let vetor2 = [5,6,7,9];

console.log(troca(vetor1, vetor2));

//resposta

trocarElemento = (vetorA, vetorB) => {
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

let vetor3 = [1, 2, 3]
let vetor4 = [5, 8, 9]
let vetor3erro = []

console.log(trocarElemento(vetor3, vetor4))