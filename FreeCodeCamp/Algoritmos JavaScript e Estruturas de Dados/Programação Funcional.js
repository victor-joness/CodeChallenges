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
console.log(tea4TeamFCC)