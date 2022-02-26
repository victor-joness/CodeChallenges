/* - 10: Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function verificar2(num : number){
    if(num % 3 == 0){
        return true
    }else{
        return false;
    }
}

console.log(verificar2(10));