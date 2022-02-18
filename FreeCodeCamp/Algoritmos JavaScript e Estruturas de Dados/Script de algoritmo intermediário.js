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
