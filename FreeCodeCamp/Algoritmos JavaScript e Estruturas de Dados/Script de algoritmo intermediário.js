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

function destroyer(arr) {
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);