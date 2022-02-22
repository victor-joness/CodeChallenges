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

//Validador de número de telefone
/* Retorne truese a string passada parecer um número de telefone válido dos EUA.

O usuário pode preencher o campo do formulário da maneira que quiser, desde que tenha o formato de um número americano válido. 
Veja a seguir exemplos de formatos válidos para números dos EUA (consulte os testes abaixo para outras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
Para este desafio, você receberá uma string como 800-692-7753ou 8oo-six427676;laskdjf. Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país for fornecido, você deverá confirmar que o código 
do país é 1. Retorna truese a string for um número de telefone dos EUA válido; caso contrário, retorne false. */


  function telephoneCheck(str) {
    // regex that matches a phone number with no spaces,
    // with spaces, with dashes, and with or without country code
    let regex = /^[1]*[\s|-]*\d{3}[\s|-]*\d{3}[\s|-]*\d{4}$/;
  
    // regex that matches parentheses
    // with no spaces, with spaces, with dashes,
    // and with or without country code
    let regexParentheses = /^[1]*[\s]*[(]\d{3}[)][\s]*\d{3}[\s|-]*\d{4}$/;
  
    if (!regex.test(str)) {
      return regexParentheses.test(str);
    } else {
      return true;
    }
  
  }

  //outra solução

  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}


//Caixa registradora
/* Projete uma função de gaveta de caixa registradora checkCashRegister()que aceite preço de compra como primeiro argumento ( price), pagamento como segundo argumento ( cash) e caixa registradora ( cid) como terceiro argumento.

cidé uma matriz 2D listando a moeda disponível.

A checkCashRegister()função deve sempre retornar um objeto com uma statuschave e uma changechave.

Devolva {status: "INSUFFICIENT_FUNDS", change: []}se o dinheiro na gaveta for menor que o troco devido ou se você não puder devolver o troco exato.

Devolva {status: "CLOSED", change: [...]}com caixa como valor da chave changese for igual ao troco devido.

Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e cédulas, ordenados da ordem mais alta para a mais baixa, conforme o valor da changechave. */

const CLOSED = "CLOSED";
const INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
const OPEN = "OPEN";

const PENNY = 0;
const NICKEL = 1;
const DIME = 2;
const QUARTER = 3;
const ONE = 4;
const FIVE = 5;
const TEN = 6;
const TWENTY = 7;
const ONE_HUNDRED = 8;

const currUnits = [
  ["PENNY", 0.01], 
  ["NICKEL", 0.05], 
  ["DIME", 0.1], 
  ["QUARTER", 0.25], 
  ["ONE", 1], 
  ["FIVE", 5], 
  ["TEN", 10], 
  ["TWENTY", 20], 
  ["ONE HUNDRED", 100]
]

function checkCashRegister(price, cash, cid) {
  var change;
  let changeDue = cash - price;
  const drawerStatus = getDrawerStatus(changeDue, cid);

  switch(drawerStatus){
    case INSUFFICIENT_FUNDS:
      change = { status: INSUFFICIENT_FUNDS, change: [] }
      break;
    case CLOSED:
      change = { status: CLOSED, change: [...cid] }
      break;
    case OPEN:
      const changeCurrency = [...collectChange(changeDue, cid)];
      change = changeCurrency.length > 0 ? { status: OPEN, change: changeCurrency } : { status: INSUFFICIENT_FUNDS, change: [] }
  }
  
  // Here is your change, ma'am.
  return change;
}

function getDrawerStatus(changeDue, cashInDrawer){
  let totalCash = 0;
  let status;
  for(let i = 0; i < cashInDrawer.length; i++){
    totalCash += cashInDrawer[i][1];
  }
  if(totalCash > changeDue){
    status = "OPEN";
  }
  if(totalCash == changeDue){
    status = "CLOSED";
  }
  if(totalCash < changeDue){
    status = "INSUFFICIENT_FUNDS";
  }
  return status;
}

function collectChange(changeDue, cashInDrawer) {
  const changeBreakdown = splitChange(changeDue); 
  const { dollars, cents } = changeBreakdown;
  const billChange = getBillsFromDrawer(dollars, cashInDrawer).change;
  let coinChange = getCoinsFromDrawer(cents, cashInDrawer).change;
  return billChange.concat(coinChange);
}

function splitChange(change){
  const breakdown = change.toString().split(".");
  return { dollars: breakdown[0], cents: breakdown[1] }
}

function splitBillAmounts(amount){
  let digits = amount.toString().split('').reverse();
  
  for(let i = 0; i < digits.length; i++){
     digits[i] =  i >= 1 ? parseInt(digits[i]+'0'.repeat(i)) : parseInt(digits[i]);
  }
  return digits.reverse();  
}

function selectBillOrCoinChange(amount, cid, unit, change){
  let currency = cid[unit];
  if(unit < PENNY){
       return { change: [], cid }
  }
  else if(amount == 0){
    return { change, cid };
  }
  else if(amount <= currency[1]){
    if(amount%currUnits[unit][1] != 0){
      const amtToRemove = Math.floor(amount/currUnits[unit][1])*currUnits[unit][1];
      cid[unit] = [currency[0], currency[1] - amtToRemove]
      change.push([currency[0], amtToRemove])
      const remAmount = unit > QUARTER ? amount - amtToRemove : parseFloat((amount - amtToRemove).toFixed(2))
      return selectBillOrCoinChange(remAmount, cid, unit - 1, change)
    } else {
      cid[unit] = [currency[0], currency[1] - amount]  
      change.push([currency[0], amount])
    }
    
    return { change, cid }
  } 
  else if(amount > currency[1]){
      const remAmount = amount - currency[1];
      if(currency[1] != 0){     
        change.push(currency);
      }
      cid[unit] = [currency[0], 0]
      return selectBillOrCoinChange(remAmount, cid, unit - 1, change);
  }
}

function getBillsFromDrawer(amount, cid){
   const billAmounts = splitBillAmounts(amount);
   let result = [];
   
   let i = 0, change = [];
   while(i < billAmounts.length){
     if(billAmounts[i] >= 100) {
        result.push(selectBillOrCoinChange(billAmounts[i], cid, ONE_HUNDRED, change));
        i++
        continue;
     }
     if(billAmounts[i] >= 20){
       result.push(selectBillOrCoinChange(billAmounts[i], cid, TWENTY, change));
       i++
       continue;
     }
     
     if(billAmounts[i] >= 10){
       result.push(selectBillOrCoinChange(billAmounts[i], cid, TEN, change));
       i++
       continue;
     }
     if(billAmounts[i] >= 5){
       result.push(selectBillOrCoinChange(billAmounts[i], cid, FIVE, change));
       i++
       continue;
     }
     result.push(selectBillOrCoinChange(billAmounts[i], cid, ONE, change));
     i++;
   }
   result = result[result.length-1];
   result.change = arrangeChange(result.change);
   return result
}

function getCoinsFromDrawer(amount, cid){
  const coinAmounts = splitCoinAmounts(amount);
   let result = [];
   
   let i = 0, change = [];
   while(i < coinAmounts.length){
     if(coinAmounts[i] >= 0.25) {
        result.push(selectBillOrCoinChange(coinAmounts[i], cid, QUARTER, change));
        i++
        continue;
     }
     
     if(coinAmounts[i] >= 0.1) {
        result.push(selectBillOrCoinChange(coinAmounts[i], cid, DIME, change));
        i++
        continue;
     }
     
     if(coinAmounts[i] >= 0.5) {
        result.push(selectBillOrCoinChange(coinAmounts[i], cid, NICKEL, change));
        i++
        continue;
     }
     result.push(selectBillOrCoinChange(coinAmounts[i], cid, PENNY, change));
     i++
   }
   result = result[result.length-1];
   result.change = arrangeChange(result.change);
   return result
}

function splitCoinAmounts(amount) {
  let digits = amount.toString().split('');
  
  for(let i = 0; i < digits.length; i++){
     digits[i] =  i >= 1 ? parseFloat('0.'+'0'.repeat(i)+digits[i]) : parseFloat('0.'+digits[i]);
  }
  return digits;  
}

// Utility Functions
function arrangeChange(change){
  let arrangedChange = [];
  let copyChange = change;
  for(let i = 0; i < copyChange.length; i++){
    let currency = copyChange[i];
    if(existsInArr(arrangedChange, currency[0])) {
       continue; 
    }
    for(let j = 0; j < change.length; j++){
      if(i != j) {
        if(currency[0] == change[j][0]){
          currency[1] += change[j][1];
        }
      }
    }
    arrangedChange.push(currency)
  }
  return arrangedChange;
}

function existsInArr(haystack, needle) {
    for (var i = 0; i < haystack.length; ++i) {
        if (haystack[i][0] == needle) {
            return true;
        }
    }
    return false;
}