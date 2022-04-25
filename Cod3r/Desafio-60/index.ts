/* 
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
*/

const areaDoTriangulo2 = (base:number, altura:number) => {
    return ((base * altura) / 2).toPrecision(4);
}

console.log(areaDoTriangulo2(10, 15));
console.log(areaDoTriangulo2(7, 9));
console.log(areaDoTriangulo2(9.25, 13.1));