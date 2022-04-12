/* 
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.

//
basicamente se os numeros forem iguais e o inclusivo for trui, deve rwetorna true, se os numeros forem
iguais porem o inclusivo false, que é o valor padrao deve retorna false.

a questao não deixa explicito mais é impossivel vc passar um numero e ele ter um valor minimo maior que
o valor maximo.
*/

function estaEntre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo == true){
        if(numero == minimo || numero == maximo){
            return true;
        }
    }

    if(minimo > maximo){
        return "O valor de maximo tem que ser maior que o minimo para o 'numero' está entre eles."
    }

    if(numero > minimo && numero < maximo){
        return true
    }else{
        return false;
    }
}

console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 1, 3));
console.log(estaEntre(3, 150, 3, true));
console.log(estaEntre(10, 100, 150));
console.log(estaEntre(10, 100, 250));
console.log(estaEntre(10, 0, 20));
console.log(estaEntre(10, 5, 25));