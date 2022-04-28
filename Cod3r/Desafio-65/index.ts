/* 
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

const buscarPalavrasSemelhantes2 = (string:string, array:Array<string>) => {
    let resultado = []
    for(let i = 0; i < array.length; i++){
        if(array[i].includes(string)){
            resultado.push(array[i])
        }
    }

    return resultado;

    /* return array.filter((elemento) => elemento.includes(string)); */
}

console.log(buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes2("python", ["javascript", "java", "c++"]));