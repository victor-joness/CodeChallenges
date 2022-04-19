/* 
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
*/

const checarAnoBissexto = (ano) => {
   if(ano % 4 == 0){
       if(ano % 100 != 0){
           return true;
       }else{
           if(ano % 400 == 0){
               return true;
           }
           return false;
       }
   }
   return false;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
console.log(checarAnoBissexto(2015));
console.log(checarAnoBissexto(2016));
console.log(checarAnoBissexto(1500));
console.log(checarAnoBissexto(1600));
console.log(checarAnoBissexto(1700));
console.log(checarAnoBissexto(2000));
console.log(checarAnoBissexto(2012));