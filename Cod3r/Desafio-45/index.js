/* 
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
*/

function maiorOuIgual(num1, num2){
    if(typeof num1 != "number" || typeof num2 != "number") return false;
    
    if(num1 >= num2){
        return true
    }
    return false;
}

console.log(maiorOuIgual(0,0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));