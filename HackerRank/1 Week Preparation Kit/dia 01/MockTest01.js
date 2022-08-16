/* 
A mediana de uma lista de números é essencialmente o elemento do meio após a classificação. O mesmo número de elementos ocorre depois dele como antes. Dada uma lista de números com um número ímpar de elementos, encontre a mediana ?

Exemplo

A matriz ordenada. O elemento do meio e a mediana são.

Descrição da função

Complete a função findMedian no editor abaixo.

findMedian tem os seguintes parâmetros:

int arr[n]: uma matriz não classificada de inteiros
Devoluções

int: a mediana do array
Formato de entrada

A primeira linha contém o inteiro, o tamanho de.
A segunda linha contéminteiros separados por espaço

Restrições

é estranho
Entrada de Amostra 0

7 
0 1 2 4 6 5 3
Saída de Amostra 0

3
Explicação 0

O classificado. Seu elemento do meio está em.
*/

function findMedian(arr) {
    let arrorder = arr.sort(function(a,b) {return a - b;});
    let tamanho = arrorder.length;
    let metade = parseInt(tamanho / 2); //Math.floor(arr.length/2);
    if(tamanho % 2 == 0){
        return (arrorder[metade] + arrorder[(metade) - 1]) / 2;
    }else{
        return arr[metade]
    }
}

console.log(findMedian([0,1,2,4,6,5,3,45,6,5,3,1,3,43,54,65]));
console.log(findMedian([0,1,2 ,4 ,6 ,5 ,3,3,4,5,6,7,8,5,3,2,1,3,5,7]));
console.log(findMedian([0 ,1 ,2 ,4 ,6 ,5 ,3,5,7,8,9,4,3,5,6,7]));
console.log(findMedian([0, 1, 2, 4, 6, 5,3]));
console.log(findMedian([0,1,2,4,6,5,3]));




function findMedian2(values) {

    console.log(values.sort( function(a,b) {return a - b;} ))

    var half = Math.floor(values.length/2);
    
    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

console.log(findMedian2([0,1,2,4,6,5,3,45,6,5,3,1,3,43,54,65]));
console.log(findMedian2([0,1,2 ,4 ,6 ,5 ,3,3,4,5,6,7,8,5,3,2,1,3,5,7]));
console.log(findMedian2([0 ,1 ,2 ,4 ,6 ,5 ,3,5,7,8,9,4,3,5,6,7]));
console.log(findMedian2([0, 1, 2, 4, 6, 5,3]));
console.log(findMedian2([0,1,2,4,6,5,3]));
