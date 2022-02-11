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