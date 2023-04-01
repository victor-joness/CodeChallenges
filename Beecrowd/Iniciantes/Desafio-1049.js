/* 
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */
var lines = ["vertebrado","mamifero","onivoro",
]; /* input.split('\n').map(String); */

if (lines[0] === "vertebrado") {
    if(lines[1] == "ave"){
        if(lines[2] == "carnivoro"){
            console.log("aguia");
        }else{
            console.log("pomba");
        }
    }else{
        if(lines[2] == "onivoro"){
            console.log("homem");
        }else{
            console.log("vaca");
        }
    }
}else{
    if(lines[1] == "inseto"){
        if(lines[2] == "hematofago"){
            console.log("pulga");
        }else{
            console.log("lagarta");
        }
    }else{
        if(lines[2] == "hematofago"){
            console.log("sanguessuga");
        }else{
            console.log("minhoca");
        }
    }
}   