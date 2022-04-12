/* 
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
*/

function maiorOuIgual2(num1:number, num2:number): boolean{
    if(typeof num1 != "number" || typeof num2 != "number") return false;
    
    if(num1 >= num2){
        return true
    }
    return false;
}

console.log(maiorOuIgual2(0,0));
console.log(maiorOuIgual2(0, "0"));
console.log(maiorOuIgual2(5, 1));