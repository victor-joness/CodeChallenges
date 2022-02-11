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

function truncateString(str, num) {
    let resultado = "";
    if(str.length > num){
        for(let i = 0; i < num; i++){
            resultado = resultado + str[i]
        }
    }else{
        return str;
    }
    return resultado + "..."
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Achado não é roubado,Crie uma função que examine uma matriz arre retorne o primeiro elemento nela que passa em um 'teste de verdade'.
function findElement(arr, func) {
    let resultado = -1;
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            resultado = arr[i];
            return resultado;
        }
    }    
    if(resultado == -1){
        return undefined;
    }
}
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

//Boo quem
//Verifique se um valor é classificado como uma primitiva booleana. Retornar trueou false.

function booWho(bool) {
    if(typeof bool === "boolean"){
        return true;
    }else{
        return false;
    }
}
  
console.log(booWho(true));
console.log(booWho(NaN));

//Título Case uma Frase
//Retorna a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o resto da palavra esteja em letras minúsculas.
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

//Fatiar e emendar,Você recebe duas matrizes e um índice, Copie cada elemento da primeira matriz na segunda matriz, em ordem.
function frankenSplice(arr1, arr2, n) {
    let matriz = arr1;
    let matriz2 = arr2;
    let intermediario = [];
    let resultado = [];
    let final = [];
    intermediario = matriz2.slice(0,n);
    final = matriz2.slice(n,arr2.length);

    resultado = intermediario.concat(matriz).concat(final);

    return resultado;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//Falso Bouncer, Remova todos os valores falsos de uma matriz., Os valores falsos em JavaScript são false, null, 0, "", undefinede NaN.
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]))

//Onde eu pertenço
//Retorna o índice mais baixo no qual um valor (segundo argumento) deve ser inserido em um array (primeiro argumento) depois de ordenado. O valor retornado deve ser um número.
function getIndexToIns(arr, num) {
    arr.sort();
    let contador = 0;
    for(let i=0; i< arr.length; i++){
        if(num > arr[i]){
            contador++;
        }
    }
    return contador;
}
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))

//Mutações
//Retorna truese a string no primeiro elemento da matriz contiver todas as letras da string no segundo elemento da matriz.
function mutation(arr) {
    var newArr = [];
    var temp= 0;
    for (var i = 0; i < arr.length; ++i) {
      newArr[i] = arr[i].toLowerCase();
    }
    
    for (var j = 0; j < newArr[1].length; ++j) {
      if (newArr[0].indexOf(newArr[1][j]) < 0)
        return false;
    }
   return true;
  }
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Army"]));

//Chunky Monkey
//Escreva uma função que divida um array (primeiro argumento) em grupos com o comprimento de size(segundo argumento) e os retorne como um array bidimensional.
function chunkArrayInGroups(arr, size) {
    newArr = [];
    var stop = size;
    for(var i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, stop));
      stop += size;
    }
    return newArr;
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))