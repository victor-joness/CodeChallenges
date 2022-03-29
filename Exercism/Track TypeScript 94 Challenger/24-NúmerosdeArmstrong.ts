/* Um número de Armstrong é um número que é a soma de seus próprios dígitos, cada um elevado à potência do número de dígitos.

Por exemplo:

9 é um número de Armstrong, porque9 = 9^1 = 9
10 não é um número de Armstrong, porque10 != 1^2 + 0^2 = 1
153 é um número de Armstrong, porque:153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
154 não é um número Armstrong, porque:154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
Escreva algum código para determinar se um número é um número Armstrong.
*/

export function isArmstrongNumber(number: number): boolean {
    //pegando o tanto de caracters de entrada
    let tamanho = number.toString().split("").length;
    //separando esses numeros em um array de string
    let separado = number.toString().split("");

    //transformando o array de string em um array de numero
    let arraynumber = [];
    for(let i = 0; i< tamanho; i++){
        arraynumber.push(Number(separado[i]));
    }

    let soma = 0;
    //fazendo a potencia e adicionando a variavel soma;
    for(let i = 0; i < tamanho; i++){
        soma = soma + (arraynumber[i] ** tamanho)
    }

    if(number == soma){
        return true
    }else{
        return false;
    }

}

console.log(isArmstrongNumber(5));
console.log(isArmstrongNumber(10));
console.log(isArmstrongNumber(153))
console.log(isArmstrongNumber(100))
console.log(isArmstrongNumber(9474))
console.log(isArmstrongNumber(9475))
console.log(isArmstrongNumber(9926315))