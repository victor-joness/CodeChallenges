/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

let criança1 = {
    altura: 100,
    taxa: 10
}

let criança2 = {
    altura: 100,
    taxa:11
}

function altura(criança1, criança2){
    if(criança1.altura == criança2.altura){
        if(criança1.taxa > criança2.taxa){
            return "A criança1 ira passar a 2 em 1 ano"
        }else if(criança2.taxa > criança1.taxa){
            return "A criança2 ira passar a 1 em 1 ano"
        }else{
            return "A altura e a taxa são a mesma para as duas crianças";
        }
    }

    if(criança1.altura > criança2.altura){
        if(criança1.taxa > criança2.taxa){
            return "A criança1 ira permanecer maior que a 2";
        }else if(criança2.taxa > criança1.taxa){
            return `A criança2 ira passar a 1 em ${calcular(criança2.altura,criança1.taxa,criança1.altura,criança2.taxa)}`;
        }else{
            return "A criança1 ira permanecer maior que a 2";
        }
    }

    if(criança2.altura > criança1.altura){
        if(criança2.taxa > criança1.taxa){
            return "A criança2 ira permanecer maior que a 1";
        }else if(criança1.taxa > criança2.taxa){
            return `A criança2 ira passar a 1 em ${calcular(criança1.altura,criança2.taxa,criança2.altura,criança1.taxa)}`;
        }else{
            return "A criança2 ira permanecer maior que a 1";
        }
    }
}

function calcular(alturaMenor, taxaMenor, alturaMaior, taxaMaior){
    let qtdAnos = 0

    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        qtdAnos++
    }
    return qtdAnos;
}

console.log(altura(criança1, criança2));