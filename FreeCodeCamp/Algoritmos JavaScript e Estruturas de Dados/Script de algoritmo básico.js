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

//Retornar os maiores números em arrays
function largestOfFour(arr) {
    
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));