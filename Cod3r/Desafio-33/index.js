/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console */

function concatenar(vetorInteiro,vetorString,vetorDouble){
    let resultado = "";
    return resultado.concat(vetorInteiro).concat(", ",vetorString).concat(", ",vetorDouble);
}

let vetorInteiro = [1,2,3,4];
let vetorString = ["oi", "aqui", "tem", "sorvete"];
let vetorDouble = [1.24,1.55,1.75,2.3];

console.log(concatenar(vetorInteiro,vetorString,vetorDouble));

//outra forma de se fazer

console.log(vetorInteiro.concat(vetorString,vetorDouble));

