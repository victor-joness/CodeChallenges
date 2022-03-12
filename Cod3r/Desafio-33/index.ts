/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console */

function concatenar2(vetorInteiro: number[],vetorString: string[],vetorDouble: number[]){
    let resultado = "";
    return resultado.concat(vetorInteiro.toString()).concat(", ",vetorString.toString()).concat(", ",vetorDouble.toString());
}

let vetorInteiro2 = [1,2,3,4];
let vetorString2 = ["oi", "aqui", "tem", "sorvete"];
let vetorDouble2 = [1.24,1.55,1.75,2.3];

console.log(concatenar2(vetorInteiro2,vetorString2,vetorDouble2));

//outra forma de se fazer

console.log(vetorInteiro2.concat(vetorString2,vetorDouble2));