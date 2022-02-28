/* - 12: Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(numero){
    if( typeof numero !== "number"){
        return "Uma das entradas é invalida"
    }

    if( numero == 0){
        return 0
    }

    let fatorial = 1;
    for(let i = 1; i<= numero; i++){
        fatorial = fatorial * i
    }

    return fatorial
}

console.log(fatorial(7));