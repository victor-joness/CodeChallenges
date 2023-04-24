/* 
Mariazinha sabe que um Número Primo é aquele que pode ser dividido somente por 1 (um) e por ele mesmo. Por exemplo, o número 7 é primo, pois pode ser dividido apenas pelo número 1 e pelo número 7 sem que haja resto. Então ela pediu para você fazer um programa que aceite diversos valores e diga se cada um destes valores é primo ou não. Acontece que a paciência não é uma das virtudes de Mariazinha, portanto ela quer que a execução de todos os casos de teste que ela selecionar (instâncias) aconteçam no tempo máximo de um segundo, pois ela odeia esperar.
*/

/* 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
*/

//forma padrao, lenta, levou 5 segundos

let lines = ["3", "123321", "123", "103", "7", "2"];

const n = parseInt(lines.shift());

const primo = (numero) => {
    for (let i = 0; i < n; i++) {
        let num = parseInt(numero);
        let isPrime = true;
        
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
            isPrime = false;
            break;
            }
        }
        
        return isPrime;
    }
}

console.log(primo(lines[0]));

//forma rapida, excluindo os pares, levou 3 segundos

const primo2 = (numero) => {
    for (let i = 0; i < n; i++) {
        let num = parseInt(numero);
        let isPrime = true;
        
        if(num % 2 === 0) return true;

        for (let j = 3; j < num; j = j + 2) {
            if (num % j === 0) {
            isPrime = false;
            break;
            }
        }
        
        return isPrime;
    }
}

console.log(primo2(lines[3]));


//fazemos agora excluindo os pares e indo ate no maximo a raiz do numero, levou 0.5 segundos

const primo3 = (numero) => {
    for (let i = 0; i < n; i++) {
        let num = parseInt(numero);
        let isPrime = true;
        
        if(num % 2 === 0) return true;

        for (let j = 3; j < Math.sqrt(num); j = j + 2) {
            if (num % j === 0) {
            isPrime = false;
            break;
            }
        }
        
        return isPrime;
    }
}

console.log(primo3(lines[4]));