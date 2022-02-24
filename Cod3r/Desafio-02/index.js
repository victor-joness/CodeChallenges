/* ->02:Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulo(lado1, lado2, lado3){
    if( typeof lado1 !== "number" || typeof lado2 !== "number" || typeof lado3 !== "number"){
        return "Uma das entradas é invalida"
    }

    let resultado = "";

    if((lado1 == lado2) && (lado2 == lado3)){
        resultado = "Equilátero"
    }else{
        if((lado1 == lado2)||(lado1 == lado3)||(lado2 == lado3)){
            resultado = "Isósceles"
        }else{
            resultado = "Escaleno"
        }
    }
    return resultado;
}

console.log(triangulo(1,2,3))

