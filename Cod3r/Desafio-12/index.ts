/* - 12: Faça um algoritmo que calcule o fatorial de um número. */

function fatorial2(numero: number){
    if( numero == 0){
        return 0
    }

    let fatorial = 1;
    for(let i = 1; i<= numero; i++){
        fatorial = fatorial * i
    }

    return fatorial
}

console.log(fatorial2(7));