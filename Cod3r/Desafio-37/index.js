/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
 */

function pa(termos, a1, r){
    let resultado = 0;
    let soma = 0;
    for(let i = 1; i <= termos; i++){
        resultado = a1+(i - 1) * r
        soma = soma + resultado;
        console.log(resultado)
    }

    return soma;
}

console.log(pa(10,10,15));


function pg(termos, a1, r){
    let resultado = 0;
    let soma = 0;
    for(let i = 1; i <= termos; i++){
        resultado =  a1 * r ** (i - 1)
        soma = soma + resultado;
        console.log(resultado)
    }

    return soma;
}

console.log(pg(10, 26, 5));


//outra forma
paCalculo = (n, a1, r) => {
    return a1 + (n - 1)*r
}

console.log(paCalculo(10, 10, 15));

pgCalculo = (n, a1, r) => {
    return a1 * r ** (n - 1)
}

console.log(pgCalculo(10, 26, 5))