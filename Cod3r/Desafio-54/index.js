/* 
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/

const objetoParaArray = (objeto) => { 
    let resultado = [];
    resultado = Object.entries(objeto)
    return resultado;
}

console.log(
    objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software",
    })
);

console.log(
    objetoParaArray({
        codigo: 11111,
        preco: 12000,
    })
);


//se eu quiser apenas o valor das propriedades Object.values(objeto)