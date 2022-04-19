/* 
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
*/
let objeto1 = {
    a: 1,
    b: 2
}

let objeto2 = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}

const removerPropriedade = (objeto, propriedade) => {
    let objetoaux = objeto;
    delete objetoaux[propriedade]

    return objetoaux;
}

console.log(removerPropriedade({a: 1, b: 2}, "b"))
console.log(removerPropriedade(objeto2, "descricao"));

console.log(Object.is(removerPropriedade({a: 1, b: 2}, "a"), {a: 1, b: 2}));