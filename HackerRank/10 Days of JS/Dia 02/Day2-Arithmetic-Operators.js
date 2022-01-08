//calcular a aréa de um retangulo.

function isNumber(val){
    return typeof val === "number"
}

function getArea(altura, largura){
    //primeira verificação se a entrada é um number
    isNumber(altura)? "" : console.log("error, aceitamos apenas numeros");
    isNumber(largura)? "" : console.log("error, aceitamos apenas numeros");
    //segunda verificação que os parametros tem que ser entre 1 e 1000
    if((altura > 1000) || (largura > 1000)){
        console.log("error - aceitamos apenas numeros entre 1 e 1000");
    }


    return altura * largura;
}

function getPerimetro(altura, largura){
    //primeira verificação se a entrada é um number
    isNumber(altura)? "" : console.log("error, aceitamos apenas numeros");
    isNumber(largura)? "" : console.log("error, aceitamos apenas numeros");
    //segunda verificação que os parametros tem que ser entre 1 e 1000
    if((altura > 1000) || (largura > 1000)){
        console.log("error - aceitamos apenas numeros entre 1 e 1000");
    }
    return ((altura * 2) + (largura * 2));
}

console.log(getArea(3, 4.5));
console.log(getPerimetro(3, 4.5));
