//Script de algoritmo básico

//Converter Celsius para Fahrenheit
function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(convertToF(30));

//Inverter uma string
function reverseString(str) {
    let resultado = "";
    for(let i = str.length - 1; i >=0; i--){
        resultado = resultado + str[i];
    }
    return resultado;
}
console.log(reverseString("hello"));

//Fatorar um número
function factorialize(num) {
    let resultado = 1;
    for(let i = num; i > 1; i--){
        resultado = resultado * i;
    }    
    return resultado
}  
console.log(factorialize(5));

//Encontre a palavra mais longa em uma string

function findLongestWordLength(str) {
    let matriz = str.split(' ');
    let maxTamanho = 0;

    for(let i = 0; i < matriz.length; i++){
        if(matriz[i].length > maxTamanho){
            maxTamanho = matriz[i].length;
        }
    }
    return maxTamanho;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//retorna o maior numero de um conjunto de arrays
function largestOfFour(arr) {
    let maior = 0;
    let maiordecada = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] > maior){
                maior = arr[i][j];
            }
        }
    }
    return maior;
    
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Retornar os maiores números em arrays
function largestOfFour(arr) {
    let maior = [];
    for (let i = 0; i < arr.length; i++) {
        let numero = -999999999999999999999999;
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] > numero){
                numero = arr[i][j];
            }
        }
        maior.push(numero);
    }
    return maior;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

//operador ternario
let numero2 = 10;
let idade = numero2 >= 10 ? "maior" : "menor";
console.log(idade)

//Confirme o final

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("He has to give me a new name", "name"));

//Repetir uma String Repetir uma String,Repita uma determinada string str(primeiro argumento) por numvezes (segundo argumento). 
function repeatStringNumTimes(str, num) {
    let resultado = "";
    if(num <= 0){
        return "";
    }
    for(let i = 0; i < num; i++){
        resultado = resultado + str
    }
    return resultado;
}

function repeatStringNumTimes2(str, num) {
    let resultado = str.repeat(num);
    return resultado;
}
console.log(repeatStringNumTimes2("abc", 3));

//Truncar uma string

