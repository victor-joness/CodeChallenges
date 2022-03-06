/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function troco2(valor){
    let notas = [100, 50, 20, 10, 5, 1]
    let troco = {
        '100': 0,
        '50': 0,
        '20': 0,
        '10': 0,
        '5': 0,
        '1': 0
    }

    if (valor == 0 || valor < 0) {
        console.log('Valor inválido')
    } else {
        for (notas of notas) {
            while (valor >= notas) {
                troco[notas] += 1
                valor -= notas
            }
        }
    }
    return troco
}

console.log(troco2(18))
