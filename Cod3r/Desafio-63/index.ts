/* 
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

const contarPalavras2 = (frase:string) => {
    let contador = 1;
    let tamanho = frase.split("").length;
    for(let i = 0; i < tamanho; i++){
        if(frase.split("")[i] == " "){
            contador++;
        }
    }

    return contador;
}

console.log(contarPalavras2("Sou uma frase"));
console.log(contarPalavras2("Me divirto aprendendo a programar"));

//ficou bem feia essa lógica, funciona apenas pra esse exercicio, porem da pra melhor muito com regex;

const contarPalavras22 = (frase:string) => {
    let contador = 1;
    let tamanho = frase.trim().split(" ").length

    console.log(frase.split(" "))

    return tamanho;
}

console.log(contarPalavras22("Sou uma frase"));
console.log(contarPalavras22("Me divirto aprendendo a programar"));

//refiz, agora sim ta certo, o metodo trim tira os eapços em branco no inicio e no final, que no caso é oque tava dando error
//no codigo anteior. e agora tems apenas 2 funcoes nativas sendo chamados , oque deixa muito mais eficiente.