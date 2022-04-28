/* 
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/

const contarCaractere2 = (caractere: string, frase:string) => {
    let fraseseparada = frase.split("")
    let tamanho = fraseseparada.length;
    let contador = 0;

    for(let i = 0; i < tamanho; i++){
        if(caractere == fraseseparada[i]){
            contador++;
        }
    }

    return contador;
}

console.log(contarCaractere2("r", "A sorte favorece os audazes"));
console.log(contarCaractere2("c", "Conhece-te a ti mesmo"));