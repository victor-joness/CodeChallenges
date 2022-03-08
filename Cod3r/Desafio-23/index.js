/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function calcular(codigo, nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3];
    let maior = notas[0];
    let menores = [];
    //verificando o maior numero do array de notas e colocando na variavel maior
    for(let i =0; i < 3; i++){
        if( notas[i] > maior){
            maior = notas[i];
        }
    }
    //verificando os menores numeros do array e colocando dentro de menores
    for(let i = 0; i< 3; i++){
        if(notas[i] != maior){
            menores.push(notas[i]);
        }
    }
    //fazendo a multiplicação por 3 dos 2 menores elementos
    menores.forEach((item) => {
        menores.push(item*3);
    })
    //removendo os 2 menores elementos originais
    for(let i = 0; i< 2; i++){
        menores.shift();
    }
    //adicionando o maior elemento ja com o calculo do ponderado;
    menores.push(maior * 4);
    //fazendo a soma dos elementos e a divisao assim obtendo a nota media
    let soma = 0;
    menores.forEach((item) => {
        soma = soma + item;
    });
    //fazendo a media ponderada
    let media = soma / 10

    //fazendo o if dos aprovados / reprovados
    if(media < 5){
        return `Alun@ : ${codigo}, Sua nota foi de ${media} logo : Reprovado`;
    }else{
        return `Alun@ : ${codigo}, Sua nota foi de ${media} logo : Aprovado`;
    }
}

console.log(calcular(2,3,1,5))

//forma tradicional 

let calcularMedia = (codigoAluno, nota1 = 0, nota2 = 0, nota3 = 0) => {
    let somaMedia =  nota1 + nota2 + nota3
    let media = somaMedia / 3

    if (media >= 5) {
        console.log(`O aluno do código: ${codigoAluno}. Foi APROVADO.`)
    } else {
        console.log(`O aluno do código: ${codigoAluno}. Foi REPROVADO.`)
    }
}