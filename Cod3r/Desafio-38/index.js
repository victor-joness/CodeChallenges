/*  Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
 */

function impares(inicio = 0, fim = 100){
    let Inicio = inicio;
    let Fim = fim;

    if(Inicio > Fim){
        Inicio = Fim
        Fim = inicio
    }

    for(let i = Inicio; i<Fim; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}

console.log(impares(20,50));