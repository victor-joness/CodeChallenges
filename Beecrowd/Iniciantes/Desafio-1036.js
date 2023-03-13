/* 
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.
*/
var numeros = [10.0 ,3.0 ,5.0];

var a = parseFloat(numeros[0]).toFixed(1);
var b = parseFloat(numeros[1]).toFixed(1);
var c = parseFloat(numeros[2]).toFixed(1);

var delta = (b * b) - (4 * a * c);

var R1 = (-b + Math.sqrt(delta)) / (2 * a);
var R2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log(typeof R1);
console.log(typeof R2);

console.log(R1)             

var teste = typeof 0;

if((typeof R1 != teste) || (typeof R2 != teste) || isNaN(R1) || isNaN(R2)){
    console.log("Impossivel calcular");
}else{
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}