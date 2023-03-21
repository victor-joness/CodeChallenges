/* Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar. */

var numeros = [3,2] /* (lines.shift()).split(" "); */

var card = {
    1 : 4.00,
    2 : 4.50,
    3 : 5.00,
    4 : 2.00,
    5 : 1.50
}

var ped1 = numeros[0];
var ped2 = numeros[1];

console.log("Total: R$ " + (card[ped1] * ped2).toFixed(2));

//tempo : 0.450