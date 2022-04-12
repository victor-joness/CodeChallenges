/* 
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
 */

function inverso2(parametro: any):any {
    if(typeof parametro == "boolean"){
        if(parametro == true){
            return false;
        }else{
            return true;
        }
    }
    
    if(typeof parametro == "number"){
        return (parametro * -1)
    }else{
        return "booleano ou números esperado, mas o parâmetro é do tipo string"
    }
}

console.log(inverso2(true));
console.log(inverso2("6"));
console.log(inverso2(-2000))
console.log(inverso2("programação"));
console.log(inverso2(1));