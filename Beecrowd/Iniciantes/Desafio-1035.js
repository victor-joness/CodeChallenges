/* 
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
*/

var numeros = (lines.shift()).split(" ");

var a = parseInt(numeros[0]);
var b = parseInt(numeros[1]);
var c = parseInt(numeros[2]);
var d = parseInt(numeros[3]);

if((b > c) && (d > a)){
    if(((c + d) > (a + b)) && c > 0 && d> 0){
        if(a % 2 == 0){
            console.log("Valores aceitos");
        }else{
            console.log("Valores nao aceitos");
        }
    }else{
        console.log("Valores nao aceitos");
    }
}else{
    console.log("Valores nao aceitos");
}

