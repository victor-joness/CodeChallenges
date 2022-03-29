/* Determine se uma palavra ou frase é um isograma.

Um isograma (também conhecido como "palavra sem padrão") é uma palavra ou frase sem uma letra repetida, no entanto, espaços e hífens podem aparecer várias vezes.

Exemplos de isogramas:

lenhadores
fundo
Rio abaixo
seis anos de idade
A palavra isogramas , no entanto, não é um isograma, porque o s se repete.
 */

export function isIsogram(string: string): boolean {
    let contador = 0;
    let contador2 = 1;
    //deixando todos maisculas
    let stringoriginal = string.toLowerCase();
    //tirando o - das string
    stringoriginal = stringoriginal.split("-").join("");
    //tirando o "" das string
    stringoriginal = stringoriginal.split(" ").join("");

    if(stringoriginal == ""){
        return true;
    }

    for(let i = 0; i< stringoriginal.length; i++){
        for(let j = 1; j < stringoriginal.length; j++){
            if(stringoriginal[i] == stringoriginal[j]){
                contador2++;
            }else{
                contador++;
            }
        }
    }

    if(contador2 == stringoriginal.length){
        return true;
    }else{
        return false;
    }
}

console.log(isIsogram("isogram"))
console.log(isIsogram("eleven"))
console.log(isIsogram("subdermatoglyphic"))
console.log(isIsogram("Alphabet"))
console.log(isIsogram("six-year-old"))
console.log(isIsogram(""))