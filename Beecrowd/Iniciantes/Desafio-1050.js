/* 
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */
var lines = [11]/* input.split('\n').map(Number); */

if(lines[0] === 61){
    console.log("Brasilia");
}else if(lines[0] === 71){
    console.log("Salvador");
}else if(lines[0] === 11){
    console.log("Sao Paulo");
}else if(lines[0] === 21){
    console.log("Rio de Janeiro");
}else if(lines[0] === 32){
    console.log("Juiz de Fora");
}else if(lines[0] === 19){
    console.log("Campinas");
}else if(lines[0] === 27){
    console.log("Vitoria");
}else if(lines[0] === 31){
    console.log("Belo Horizonte");
}else {
    console.log("DDD nao cadastrado");
}