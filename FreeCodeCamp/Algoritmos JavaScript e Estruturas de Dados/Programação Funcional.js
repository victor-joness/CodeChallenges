//Saiba mais sobre programação funcional

/*
A programação funcional é sobre:

Funções isoladas - não há dependência do estado do programa, que inclui variáveis ​​globais que estão sujeitas a alterações

Funções puras - a mesma entrada sempre dá a mesma saída

Funções com efeitos colaterais limitados - quaisquer alterações ou mutações no estado do programa fora da função são cuidadosamente controladas
*/

//No editor de código, as funções prepareTeae getTeajá estão definidas para você. Chame a getTeafunção para obter 40 xícaras de chá para a equipe e armazene-as na tea4TeamFCCvariável.
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);

//Compreender a terminologia de programação funcional
/*
As funções que recebem uma função como argumento ou retornam uma função como valor de retorno são chamadas de funções de ordem superior .

Quando as funções são passadas ou retornadas de outra função, as funções que foram passadas ou retornadas podem ser chamadas de lambda .
*/

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//Entenda os perigos do uso do código imperativo
/*
Examine o código no editor. Está usando um método que tem efeitos colaterais no programa, causando um comportamento incorreto. A lista final de abas abertas, armazenadas em finalTabs.tabs, deve ser, ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']mas a lista produzida pelo código é um pouco diferente.

Altere Window.prototype.tabClosepara que remova a guia correta.
*/
const Window = function(tabs) {
    this.tabs = tabs; 
  };
  
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  Window.prototype.tabClose = function(index) {
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

    return this;
   };

  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

//Evite Mutações e Efeitos Colaterais Usando Programação Funcional
//Lembre-se que na programação funcional, mudar ou alterar coisas é chamado de mutação , e o resultado é chamado de 
//efeito colateral . Uma função, idealmente, deve ser uma função pura , o que significa que não causa nenhum efeito colateral.

//na programação funcional não queremos mudar as coisas globais, fazemos essas mudanças apenas nas funcoes, e ai chamamos elas;
let fixedValue = 4;

//aqui temos o valor de incrementar que usa uma variavel global, porem fora do escopo a variavel continua com 4.
function incrementer() {
  return fixedValue + 1;
}

//Passar argumentos para evitar dependência externa em uma função
//Nós não alteramos o valor da variável global, mas a função incrementernão funcionaria sem a variável global fixedValueestar lá.

//Outro princípio da programação funcional é sempre declarar suas dependências explicitamente. Isso significa que se uma função depende da presença de uma variável ou objeto, passe essa variável ou objeto diretamente para a função como um argumento.

let fixedValue = 4;
function incrementer(num) {
    return num + 1;
}

console.log(incrementer(fixedValue));

//Refatorar variáveis ​​globais fora de funções
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);