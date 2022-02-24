/* - 03: Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function potencia2(base : number, expoente: number){
    return Math.pow(base, expoente);
}

console.log(potencia2(3,6));

//outra maneira

function potencia4(base : number, expoente: number){
    let resultado = base;
    for(let i =0; i < expoente - 1; i++){
        resultado *= base;
    }

    return resultado;
}

console.log(potencia4(3,6));