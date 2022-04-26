/* 
Criar uma função que receba um array de números e retorne o menor número desse array.
*/

const menorNumero2 = (array) => {
    let menor = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i];
        }
    }

    return menor;
}

console.log(menorNumero2([10, 5, 35, 65]));
console.log(menorNumero2([5, -15, 50, 3]));