/* 
Dada uma matriz de inteiros, onde todos os elementos, exceto um, ocorrem duas vezes, encontre o elemento único.

Exemplo

O elemento único é.

Descrição da função

Complete a funçãoloneinteger no editor abaixo.

loneinteger tem o(s) seguinte(s) parâmetro(s):

int a[n] : uma matriz de inteiros
Devoluções

int: o elemento que ocorre apenas uma vez
Formato de entrada

A primeira linha contém um único inteiro,, o número de inteiros na matriz.
A segunda linha contéminteiros separados por espaço que descrevem os valores em.

Restrições

É garantido queé um número ímpar e que existe um elemento único.
, Onde.
 */

//tem que retorna inteiro e aceita um arr de inteiro como paramertro
function lonelyinteger(a) {
    let resultado = 0;

    for(let i = 0; i < a.length; i++){
        let contador = 0;
        for(let j = 0; j < a.length; j++){
            if(a[i] == a[j]){
                contador++;
            }
        }

        if(contador <= 1){
            resultado = a[i];
        }
    }
    return resultado;
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));

//nao sabia que podiamos usar operadores xor, and, etc no javascript, isso abre um novo horizonte,
//essa é a melhor resposta pois deixa ela O(n);
//se for a e b forem iguais me retorna 0, se for diferente me retorna 1, como sempre vamos ter apenas 1 elemento solitario, isso faz todo sentido.

function lonelyinteger2(a) { return a.reduce((a, b) => a ^ b) }

console.log(lonelyinteger2([1,2,3,4,3,2,1]));
