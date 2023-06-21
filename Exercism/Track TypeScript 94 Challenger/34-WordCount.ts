/* 

Dada uma frase, conte as ocorrências de cada palavra nessa frase.

Para os propósitos deste exercício, você pode esperar que uma palavra seja sempre uma das seguintes:

Um número composto por um ou mais dígitos ASCII (ou seja, "0" ou "1234") OU
Uma palavra simples composta por uma ou mais letras ASCII (ou seja, "a" ou "eles") OU
Uma contração de duas palavras simples unidas por um único apóstrofo (ou seja, "it's" ou "they're")
Ao contar palavras, você pode assumir as seguintes regras:

A contagem não diferencia maiúsculas de minúsculas (ou seja, "Você", "você" e "VOCÊ" são 3 usos da mesma palavra)
A contagem não é ordenada ; os testes irão ignorar como as palavras e as contagens são ordenadas
Além do apóstrofo em uma contração, todas as formas de pontuação são ignoradas
As palavras podem ser separadas por qualquer forma de espaço em branco (ou seja, "\t", "\n", " ")
Por exemplo, para a frase, "That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.a contagem seria:

that's: 1
the: 2
password: 2
123: 1
cried: 1
special: 1
agent: 1
so: 1
i: 1
fled: 1
*/

export function count(frase : string) {
    let array = frase.split(" ");

    array = array.map((palavra) => palavra.replace("\n", ""));
    array = array.map((palavra) => palavra.replace("'", "/"));
    array = array.map((palavra) => palavra.replace('"', ""));
    array = array.map((palavra) => palavra.replace("!", ""));
    array = array.map((palavra) => palavra.replace(":", " "));
    array = array.map((palavra) => palavra.replace(".", " "));
    array = array.map((palavra) => palavra.replace(",", " "));

    array = array.map((palavra) => palavra.trim());

    for(let i = 0; i < array.length; i++){
        if(array[i][0] == "/"){
            array[i] = array[i].slice(1, array[i].length);
        }
        
        if(array[i][array[i].length - 1] == "/"){
            array[i] = array[i].slice(0, -1);
        }
        
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] == " "){
                {(array[i].split(" ")).map((index) => array.push(index)); array[i] = " "}
            }
        }
    }
    
    array = array.filter((palavra) => palavra != " ");

    console.log(array);

  //throw new Error('Remove this statement and implement this function')
}


console.log(count(`"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`));