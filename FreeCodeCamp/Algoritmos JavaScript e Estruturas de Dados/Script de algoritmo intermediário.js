//Soma todos os números em um intervalo
/*
Passaremos a você uma matriz de dois números. Retorna a soma desses dois números mais a soma de todos os números entre eles. O número mais baixo nem sempre virá primeiro.
Por exemplo, sumAll([4,1])deve retornar 10porque a soma de todos os números entre 1 e 4 (ambos inclusive) é 10.
*/
function sumAll(arr) {
    let soma = 0;
    if(arr[0] > arr[1]){
        for(let i = arr[1]; i <= arr[0]; i++){
            soma = soma + i;
        }
        return soma;
    }else if(arr[1] > arr[0]){
        for(let i = arr[0]; i <= arr[1]; i++){
            soma = soma + i;
        }
        return soma;
    }
} 
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

//Diferenciar duas matrizes
//Compare duas matrizes e retorne uma nova matriz com todos os itens encontrados apenas em uma das duas matrizes fornecidas, mas não em ambas. Em outras palavras, retorne a diferença simétrica das duas matrizes.
function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
}
console.log(diffArray([1, 2, 3,4, 5], [1, 2, 3, 5]));

//Procurar e destruir
/*
Você receberá um array inicial (o primeiro argumento na destroyerfunção), seguido por um ou mais argumentos.
 Remova todos os elementos da matriz inicial que tenham o mesmo valor desses argumentos.
*/

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Portanto és
//Faça uma função que examine uma matriz de objetos (primeiro argumento) e retorne uma matriz de todos os objetos que tenham pares de nome e valor correspondentes (segundo argumento)

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);
  
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
 { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

 //Estojo de punção lombar
 //Converta uma corda em caso espinhal. Spinal case são todas as palavras em minúsculas unidas por travessões.

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.toLowerCase().split(/(?:_| )+/).join("-")
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));

//porco latino
//Pig Latin é uma maneira de alterar palavras em inglês. As regras são as seguintes:

/* - Se uma palavra começa com uma consoante, pegue a primeira consoante ou encontro consonantal, mova-a para o final da palavra e adicione aya ela.
- Se uma palavra começa com uma vogal, basta adicionar wayno final. */

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"))

//Pesquisar e substituir
//Faça uma pesquisa e substitua na frase usando os argumentos fornecidos e retorne a nova frase.
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}


//Emparelhamento de DNA
//A fita de DNA está faltando o elemento de pareamento. Pegue cada caractere, pegue seu par e retorne os resultados como uma matriz 2d.

//forma mais proxima que eu consegui
function pairElement(str) {
  let array = str.split("");
  let ge = ["g", "G"];
  let ce = ["c", "C"];
  let aa = ["a", "A"];
  let te = ["t", "T"];
  let resultado = [];

  for(let i = 0; i < array.length; i++){
    if(ge.indexOf(array[i]) == 1){
        let res = array[i].concat("C");
        resultado.push(res);
    }else if(ce.indexOf(array[i] == 1)){
        let res = array[i].concat("G");
        resultado.push(res);
    }else if(aa.indexOf(array[i]) == 1){
        let res = array[i].concat("T");
        resultado.push(res);
    }else if(te.indexOf(array[i] == 1)){
        let res = array[i].concat("A");
        resultado.push(res);
    }
  }
  return resultado
}

console.log(pairElement("GCG"));


//forma correta
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");

//forma que eu fiz analizando a correta

function pairElement2(str) {
  let array = str.split("");
  let ge = ["g", "G"];
  let ce = ["c", "C"];
  let aa = ["a", "A"];
  let te = ["t", "T"];
  let resultado = [];

  for(let i = 0; i < array.length; i++){
    if(ge.includes(array[i])){
        resultado.push(["G", "C"]);
    }else if(ce.includes(array[i])){
        resultado.push(["C", "G"]);
    }else if(aa.includes(array[i])){
        resultado.push(["A", "T"]);
    }else if(te.includes(array[i])){
        resultado.push(["T", "A"]);
    }
  }
  return resultado
}

console.log(pairElement("GCG"));
console.log(pairElement2("ATCGA"))


//Cartas desaparecidas
//Encontre a letra ausente no intervalo de letras passado e devolva-a.
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

//União ordenada
//Escreva uma função que receba duas ou mais matrizes e retorne uma nova matriz de valores exclusivos na ordem das matrizes fornecidas originais.
function uniteUnique(arr) {
  var args = Array.from(arguments);
  var uniqueValues = [];

  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!uniqueValues.includes(args[i][j])) {
        uniqueValues.push(args[i][j]);
      }
    }
  }

  return uniqueValues;
}

//Converter entidades HTMLL
//Converta os caracteres &, <, >, "(aspas duplas) e '(apóstrofo) em uma string para suas entidades HTML correspondentes.

function convertHTML(str) {

  let resultado = str.split("");

  for(let i = 0; i < resultado.length; i++){
    if(resultado[i] == "&"){
      resultado[i] = "&amp;";
    }else if (resultado[i] == "<"){
      resultado[i] = "&lt;";
    }else if( resultado[i] == ">"){
      resultado[i] = "&gt;";
    }else if( resultado[i] == '"'){
      resultado[i] = "&quot;";
    }else if ( resultado[i] == "'"){
      resultado[i] = "&apos;";
    }
  }

  return resultado.join("");
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Schindler's List"))
//Soma todos os números ímpares de Fibonacci
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}
