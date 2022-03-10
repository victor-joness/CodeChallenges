/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

function ler(vetor){
    let par = 0;
    let impar = 0;
    for(let i = 0; i< vetor.length; i++){
        if(vetor[i] % 2 == 0){
            par++
        }else{
            impar++
        }
    }

    return `O vetor tem ${par} números pares e ${impar} números impares`
}

let vetor = [2,4,6,8,10,11];

console.log(ler(vetor));