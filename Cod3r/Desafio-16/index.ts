/* - 16: Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calculadora2(num: number, operador: string, num2: number){
    switch(operador){
        case "+": 
            return num + num2
        case "-": 
            return num - num2
        case "*":
            return num * num2
        case "/":
            return num / num2
        default:
            return "operações inválida."
    }
}

console.log(calculadora2(2,"+",3))
