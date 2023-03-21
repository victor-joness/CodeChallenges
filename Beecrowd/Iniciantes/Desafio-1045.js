/* 
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).
*/



let arr = [5.0 ,7.0 ,2.0]/* lines.shift().trim().split(' ').map((x) => parseFloat(x)); */

let [A, B, C] = arr.sort((a, b) => (b - a));


if(A >= (B + C)){
    console.log("NAO FORMA TRIANGULO");
    return 0;
}

if((A*A) == ((B*B) + (C *C))){
    console.log("TRIANGULO RETANGULO");
}

if((A*A) > ((B*B) + (C*C))){
    console.log("TRIANGULO OBTUSANGULO");
}

if((A*A) < ((B*B) + (C*C)))
{
    console.log("TRIANGULO ACUTANGULO");
}

if(A == B && B == C){
    console.log("TRIANGULO EQUILATERO");
}

if((A == B || B == C || A == C) && ((A != B) || (B != C) || (A != C))){
    console.log("TRIANGULO ISOSCELES");
}