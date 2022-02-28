/* - 13: Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function dia2(data: number){

    if(( data < 0) || ( data > 31)){
        return `Dia invalido`
    }

    switch (data % 7) {
        case 1:
            return `Hoje é domingo, Fim de semana`
        case 2:
            return `Hoje é segunda, dia util`
        case 3:
            return `Hoje é terça, dia util`
        case 4:
            return `Hoje é quarta, dia util`
        case 5:
            return `Hoje é quinta, dia util`
        case 6:
            return `Hoje é sexta, Dia util`
        case 0:
            return `Hoje é sabado, Fim de semana`
      }
}


console.log(dia2(31));