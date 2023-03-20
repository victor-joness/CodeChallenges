/* Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si. */


let [A, B] = [6, 24]/* lines.shift().trim().split(' ').map((x) => parseInt(x)); */

if( A > B ){
    if( A % B == 0){
        console.log("Sao Multiplos");
    }else{
        console.log("Nao sao Multiplos");
    }
}else{
    if( B % A == 0){
        console.log("Sao Multiplos");
    }else{
        console.log("Nao sao Multiplos");
    }
}

