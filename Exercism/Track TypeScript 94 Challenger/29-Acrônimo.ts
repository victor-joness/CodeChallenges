/* Converter uma frase em seu acrônimo.

Os técnicos adoram seus TLA (acrônimos de três letras)!

Ajude a gerar algum jargão escrevendo um programa que converta um nome longo como Portable Network Graphics em seu acrônimo (PNG).
*/

export function parse(phrase: string): string {
    let stringseparada = phrase.split(" ")
    let resposta = "";
    let regex = /[A-Z]/
    stringseparada

    for(let i = 0; i < stringseparada.length; i++){
        resposta = resposta + stringseparada[i][0]
        for(let j = 1; j < stringseparada[i].length; j++){
            if(regex.test(stringseparada[i][j]) == true){
                resposta = resposta + stringseparada[i][j];
            }else if(stringseparada[i][j] == "-"){
                resposta = resposta + stringseparada[i][j+1]
            }else if(stringseparada[i][j] == ":"){
                return resposta;
            }
        }
    }


    return resposta.toUpperCase();
}
  
console.log(parse("Portable Network Graphics"));
console.log(parse("HyperText Markup Language"));
console.log(parse("Complementary metal-oxide semiconductor"))
console.log(parse("PHP: Hypertext Preprocessor"))
