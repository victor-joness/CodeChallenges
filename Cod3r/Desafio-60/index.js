/* 
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
*/

const areaDoTriangulo = (base, altura) => {
    return ((base * altura) / 2).toPrecision(4);
}

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));