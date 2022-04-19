/* 
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

const filtrarNumeros2 = (array:Array<any>) => {
    let arrayaux = [];

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] == "number"){
            arrayaux.push(array[i]);
        }
    }

    return arrayaux;
}

console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros2(["a", "c"]));