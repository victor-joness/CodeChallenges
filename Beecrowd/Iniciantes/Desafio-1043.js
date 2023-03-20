/* 
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X
*/

let [A, B, C] = [6.0, 4.0 ,2.0]/* lines.shift().trim().split(' ').map((x) => parseFloat(x)); */

if(((A + B) > C) && ((A + C) > B) && ((B + C) > A)){
    console.log("Perimetro = " + (A + B + C).toFixed(1));
}else{
    console.log("Area = " + (((A + B) * C )/ 2).toFixed(1));
}