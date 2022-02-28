/* - 11: As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

function ano2(data : number){
    if( data % 4 == 0){
        if( data % 100 != 0){
            return `Ano Bissexto`
        }else{
            return `Ano não Bissexto`
        }
    }else if( data % 400 == 0){
        return `Ano Bissexto`
    }else{
        return `Ano não Bissexto`
    }
}

console.log(ano2(2022));