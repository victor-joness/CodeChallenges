/* - 03: Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function potencia(base, expoente){
    if( typeof base !== "number" || typeof expoente !== "number"){
        return "Uma das entradas é invalida"
    }

    let resultado = base;
    for(let i =0; i < expoente - 1; i++){
        resultado *= base;
    }

    return resultado;
}

console.log(potencia(3,6));

//usuando a lib math, com o metodo pow

function potenciaMatch(base, expoente){
    return Math.pow(base, expoente);
}
console.log(potenciaMatch(3,6))