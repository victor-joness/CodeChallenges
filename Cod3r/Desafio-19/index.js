/* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function mercadinho(codigo, quantidade){
    switch(codigo){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10: return `${quantidade} unidades fica ${quantidade * codigo} reais`
        default: return "Não temos esse item"
    }

}

console.log(mercadinho(5, 10));

