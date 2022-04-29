/* 
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

const recerberMelhorEstudante2 = (objeto:object) => {
    //pegando apenas os valores dos atributos
    let valores = Object.values(objeto);
    let resultado = [];

    //fazendo a media e colocando elas dentro de um array
    for(let i = 0; i < valores.length; i++){
        let soma = 0;
        let media = 0;
        
        for(let k = 0; k < valores[i].length; k++){
            soma = soma + valores[i][k];
        }
        
        media = soma / 4;

        resultado.push(media);
    }

    //pegando a maior media;
    let maior = resultado[0];
    for(let i = 0; i< resultado.length;i++){
        if(maior < resultado[i]){
            maior = resultado[i];
        }
    }

    //pegando o index da maior media;
    let index = resultado.indexOf(maior);
    console.log(resultado.indexOf(maior))

    let array = (Object.entries(objeto)[index]);

    //transformando o array em objeto
    let obj = Object.assign({},array);

    //renomeando as chaves do objeto e depois apagando a chave antiga, return a chave nova;
    obj['Nome'] = obj['0'];
    obj['Média'] = obj['1'];
    obj["Média"] = maior;
    delete obj['0'];
    delete obj['1'];

    return obj
};

console.log(
    recerberMelhorEstudante2({
        Joao: [8, 7.6, 8.9, 6], // média 7.625
        Mariana: [9, 6.6, 7.9, 8], // média 7.875
        Carla: [7, 7, 8, 9], // média 7.75
    })
);