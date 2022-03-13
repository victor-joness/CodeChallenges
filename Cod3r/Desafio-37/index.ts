/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
 */

function pa2(termos:number, a1:number, r:number){
    let resultado = 0;
    let soma = 0;
    for(let i = 1; i <= termos; i++){
        resultado = a1+(i - 1) * r
        soma = soma + resultado;
        console.log(resultado)
    }

    return soma;
}

console.log(pa2(10,10,15));


function pg2(termos:number, a1:number, r:number){
    let resultado = 0;
    let soma = 0;
    for(let i = 1; i <= termos; i++){
        resultado =  a1 * r ** (i - 1)
        soma = soma + resultado;
        console.log(resultado)
    }

    return soma;
}

console.log(pg2(10, 26, 5));


//outra forma
let paCalculo2 = (n: number , a1:number, r:number) => {
    return a1 + (n - 1)*r
}

console.log(paCalculo2(10, 10, 15));

let pgCalculo2 = (n: number , a1:number, r:number) => {
    return a1 * r ** (n - 1)
}

console.log(pgCalculo2(10, 26, 5))