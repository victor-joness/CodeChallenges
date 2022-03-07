/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

function imposto(mes, valor){
    if( typeof mes !== "number" || typeof valor !== "number"){
        return "Uma das entradas é invalida";
    }

    let atrasoPagamento = mes - 1
    if (mes > 0 && mes < 13){
        return 'R$ ' + (valor * (1 + 0.05)** atrasoPagamento).toFixed(2).replace('.', ',')
    }else{
        return "O mês é invalido"
    }    
}

console.log(imposto(4, 100));
