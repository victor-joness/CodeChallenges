//fazer uma funcao que calcule o fatorial

function isNumber(val){
    return typeof val === "number"
}

function fatorial(n){
    isNumber(n)?"":console.log("error, a entrada não é um number");

    if((n < 1) || (n > 10)){
        console.log("Error, aceitamos apenas de 1 a 10");
    }

    let soma = 1;
    for(let i = 0; i = n; i++){
        soma = soma * n;
        n--;
    }
    return soma;
}

console.log(fatorial(1));


