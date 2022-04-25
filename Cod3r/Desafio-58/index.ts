/* 
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

const despesasTotais2 = (objeto: Object) => {
    //pegando apenas os valores das props do objeto e colocando em um array
    let arraydosvalores = [];
    for (let i = 0; i < Object.keys(objeto).length; i++) {
        arraydosvalores.push(Object.values(objeto[i]));
    }

    arraydosvalores;

    //aqui o array tava aninhado, eu não pensei em nada pra fazer a soma automaticamente, logo eu precisei desaninhar.
    let arraysemaninhado = [];
    for (let i = 0; i < arraydosvalores.length; i++) {
        for (let j = 0; j < 3; j++) {
            arraysemaninhado.push(arraydosvalores[i][j]);
        }
    }

    let resultado = 0;
    for (let i = 0; i < arraysemaninhado.length; i++) {
        if (typeof arraysemaninhado[i] == "number") {
            resultado = resultado + arraysemaninhado[i];
        }
    }

    return resultado;
};

console.log(
    despesasTotais2([
        { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
        { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
    ])
);

console.log(
    despesasTotais2([
        { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
        { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
    ])
);

//bom ficou bem feio e vem verboso, porem ta funcionando isso que importa, alem disso to praticando o uso de objetos.