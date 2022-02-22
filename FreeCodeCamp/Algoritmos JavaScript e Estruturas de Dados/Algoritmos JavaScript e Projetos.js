//Verificador de Palíndromo
/* Retorna truese a string fornecida for um palíndromo. Caso contrário, retorne false. */
function palindrome(str) {
    str = str.toLowerCase().replace(/(\W)|(\_)/g,"").split("");
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 -i]) {
            return false;
        }
    }
    return true;
}

/*
TESTS:
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true. 
*/

//Conversor de numeral romano
/* Converta o número dado em um numeral romano.

Todas as respostas em algarismos romanos devem ser fornecidas em maiúsculas. */

function convertToRoman(num) {
    let roman = '';
    let roman1 = '';
    let roman10 = '';
    let roman100 = '';
    let roman1000 = '';
    let numStr = '' + num;
    if(num<10){
      switch(numStr[0]){
        case '1': roman1 = 'I'; break;
        case '2': roman1 = 'II'; break;
        case '3': roman1 = 'III'; break;
        case '4': roman1 = 'IV'; break;
        case '5': roman1 = 'V'; break;
        case '6': roman1 = 'VI'; break;
        case '7': roman1 = 'VII'; break;
        case '8': roman1 = 'VIII'; break;
        case '9': roman1 = 'IX'; 
      }
      roman = roman1;
    }else if(num < 100){
      //numStr[0] + numStr[1]
      switch(numStr[0]){
        case '1': roman10 = 'X'; break;
        case '2': roman10 = 'XX'; break;
        case '3': roman10 = 'XXX'; break;
        case '4': roman10 = 'XL'; break;
        case '5': roman10 = 'L'; break;
        case '6': roman10 = 'LX'; break;
        case '7': roman10 = 'LXX'; break;
        case '8': roman10 = 'LXXX'; break;
        case '9': roman10 = 'XC'; 
      }
  
      switch(numStr[1]){
        case '1': roman1 = 'I'; break;
        case '2': roman1 = 'II'; break;
        case '3': roman1 = 'III'; break;
        case '4': roman1 = 'IV'; break;
        case '5': roman1 = 'V'; break;
        case '6': roman1 = 'VI'; break;
        case '7': roman1 = 'VII'; break;
        case '8': roman1 = 'VIII'; break;
        case '9': roman1 = 'IX'; 
      }
  
      roman = roman10 + roman1;
    }else if(num <1000){
      //numStr[0] + numStr[1] + numStr[2]
      switch(numStr[0]){
        case '1': roman100 = 'C'; break;
        case '2': roman100 = 'CC'; break;
        case '3': roman100 = 'CCC'; break;
        case '4': roman100 = 'CD'; break;
        case '5': roman100 = 'D'; break;
        case '6': roman100 = 'DC'; break;
        case '7': roman100 = 'DCC'; break;
        case '8': roman100 = 'DCCC'; break;
        case '9': roman100 = 'CM'; 
      }
      switch(numStr[1]){
        case '1': roman10 = 'X'; break;
        case '2': roman10 = 'XX'; break;
        case '3': roman10 = 'XXX'; break;
        case '4': roman10 = 'XL'; break;
        case '5': roman10 = 'L'; break;
        case '6': roman10 = 'LX'; break;
        case '7': roman10 = 'LXX'; break;
        case '8': roman10 = 'LXXX'; break;
        case '9': roman10 = 'XC'; 
      }
      switch(numStr[2]){
        case '1': roman1 = 'I'; break;
        case '2': roman1 = 'II'; break;
        case '3': roman1 = 'III'; break;
        case '4': roman1 = 'IV'; break;
        case '5': roman1 = 'V'; break;
        case '6': roman1 = 'VI'; break;
        case '7': roman1 = 'VII'; break;
        case '8': roman1 = 'VIII'; break;
        case '9': roman1 = 'IX'; 
      }
  
      roman = roman100 + roman10 + roman1;
    }else if(num <10000){
      //numStr[0] + numStr[1] + numStr[2] + numStr[3]
      switch(numStr[0]){
        case '1': roman1000 = 'M'; break;
        case '2': roman1000 = 'MM'; break;
        case '3': roman1000 = 'MMM'; 
        
      }
      switch(numStr[1]){
        case '1': roman100 = 'C'; break;
        case '2': roman100 = 'CC'; break;
        case '3': roman100 = 'CCC'; break;
        case '4': roman100 = 'CD'; break;
        case '5': roman100 = 'D'; break;
        case '6': roman100 = 'DC'; break;
        case '7': roman100 = 'DCC'; break;
        case '8': roman100 = 'DCCC'; break;
        case '9': roman100 = 'CM'; 
      }
      switch(numStr[2]){
        case '1': roman10 = 'X'; break;
        case '2': roman10 = 'XX'; break;
        case '3': roman10 = 'XXX'; break;
        case '4': roman10 = 'XL'; break;
        case '5': roman10 = 'L'; break;
        case '6': roman10 = 'LX'; break;
        case '7': roman10 = 'LXX'; break;
        case '8': roman10 = 'LXXX'; break;
        case '9': roman10 = 'XC'; 
      }
      switch(numStr[3]){
        case '1': roman1 = 'I'; break;
        case '2': roman1 = 'II'; break;
        case '3': roman1 = 'III'; break;
        case '4': roman1 = 'IV'; break;
        case '5': roman1 = 'V'; break;
        case '6': roman1 = 'VI'; break;
        case '7': roman1 = 'VII'; break;
        case '8': roman1 = 'VIII'; break;
        case '9': roman1 = 'IX'; 
      }
  
      roman = roman1000 + roman100 + roman10 + roman1;
    }
   return roman;
  }

//Cifra de César
/* Uma das cifras mais simples e conhecidas é a cifra de César , também conhecida como cifra de deslocamento . Em uma cifra de deslocamento, os significados das letras são deslocados por uma determinada quantidade.

Um uso moderno comum é a cifra ROT13 , onde os valores das letras são deslocados em 13 casas. Assim A ↔ N, B ↔ Oe assim por diante.

Escreva uma função que receba uma string codificada em ROT13 como entrada e retorne uma string decodificada.

Todas as letras serão maiúsculas. Não transforme nenhum caractere não alfabético (ou seja, espaços, pontuação), mas passe-os adiante. */

function rot13(str) { // LBH QVQ VG!
    const Acode='A'.charCodeAt();
    const Ncode='N'.charCodeAt();
    const Zcode='Z'.charCodeAt();
    return [...str].map(
      function(e){
        const code=e.charCodeAt();
        if(Acode<=code && code<=Zcode){
          if(code<Ncode){
            return String.fromCharCode(code+13);
          } else {
            return String.fromCharCode(code-13);
          }
        } else {
          return e;
        }
      }
    ).join("");
  }

  //outra solução

  var lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M'
  };
  
  function rot13(encodedStr) {
    var codeArr = encodedStr.split("");  // String to Array
    var decodedArr = []; // Your Result goes here
    // Only change code below this line
  
    decodedArr = codeArr.map(function(letter) {
      if(lookup.hasOwnProperty(letter)) {
        letter = lookup[letter];
      }
      return letter;
    });
  
    // Only change code above this line
    return decodedArr.join(""); // Array to String
  }