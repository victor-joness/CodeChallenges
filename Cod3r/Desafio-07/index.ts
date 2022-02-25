/* - 07:  Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function bhaskara2(ax2: string, bx: string, c: string){
    let A = parseInt(ax2);
    let B = parseInt(bx);
    let C = parseInt(c);

    let delta = Math.pow(B,2) - 4 * A * C;

    if(delta < 0){
        return "Delta é negativo"
    }

    let resultado = [];

    for(let i = 0; i < 2; i++){
        if( i == 0){
            let raiz = (-B + Math.sqrt(delta)) / 2 * A
            resultado.push(raiz)
        }else{
            let raiz = (-B - Math.sqrt(delta)) / 2 * A
            resultado.push(raiz)
        }
    }
    return resultado;
}

console.log(bhaskara2("3x²","-5x","12"));