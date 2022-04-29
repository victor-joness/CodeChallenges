/* 
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
*/

const segundoMaior2 = (array:Array<number>) => {
    function maiorr(array){
        let maior = array[0];

        for(let i = 0; i< array.length; i++){
            if(maior < array[i]){
                maior = array[i];   
            }
        }
        return maior;
    }

    let resultado = [];

    resultado.push(maiorr(array)); //colocando o primeiro valor maior no resultado;
    array.splice(array.indexOf(maiorr(array)), 1); //removendo o primeiro valor maior do array
    //com isso pegamos o mair valor do array, logo se rodamos novamente esse codigp, vamos pegar o 2 maior;
    resultado.push(maiorr(array)); //com isso obtemos o primeiro valor maior e o segundo maior; queremos apenas o segundo
    //então poderiamos até tirar o primeiro push.

    return resultado.pop()
}

console.log(segundoMaior2([12, 16, 1, 5]));
console.log(segundoMaior2([8, 4, 5, 6]));