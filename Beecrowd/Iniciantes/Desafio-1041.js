/* 
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).



Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.
*/

var numeros = [0.0, 0.1] /* (lines.shift()).split(""); */

var x =  parseFloat(numeros.shift());
var y = parseFloat(numeros.shift());


if((x != 0.0 && y === 0.0)){
    console.log("Eixo X");
}else if((y != 0 && x === 0)){
    console.log("Eixo Y");
}else if(x === y && y === 0.0){
    console.log("Origem");
}else{
    if(x > 0 && y > 0){
        console.log("Q1");
    }else if(x > 0 && y < 0){
        console.log("Q4");
    }else if(x < 0 && y > 0){
        console.log("Q2");
    }else if(x < 0 && y < 0){
        console.log("Q3");
    }
}

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let [x, y] = lines.shift().trim().split(" ").map((x) => parseFloat(x));

if (x > 0.0) {
  if (y > 0.0)       console.log("Q1");
  else if (y < 0.0)  console.log("Q4");
  else               console.log("Eixo X");
} else if (x < 0.0) {
  if (y > 0.0)       console.log("Q2");
  else if (y < 0.0)  console.log("Q3");
  else               console.log("Eixo X");
} else {
  if (y > 0.0)       console.log("Eixo Y");
  else if (y < 0.0)  console.log("Eixo Y");
  else               console.log("Origem");
}