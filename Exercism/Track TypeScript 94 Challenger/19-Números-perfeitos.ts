/* 
Determine se um número é perfeito, abundante ou deficiente com base no esquema de classificação de Nicômaco (60 - 120 CE) para números inteiros positivos.

O matemático grego Nicômaco elaborou um esquema de classificação para números inteiros positivos, identificando cada um como pertencente exclusivamente às categorias de perfeito , abundante ou deficiente com base em sua soma alíquota . A soma alíquota é definida como a soma dos fatores de um número sem incluir o próprio número. Por exemplo, a soma alíquota de 15 é (1 + 3 + 5) = 9

Perfeito : soma alíquota = número
6 é um número perfeito porque (1 + 2 + 3) = 6
28 é um número perfeito porque (1 + 2 + 4 + 7 + 14) = 28
Abundante : soma alíquota > número
12 é um número abundante porque (1 + 2 + 3 + 4 + 6) = 16
24 é um número abundante porque (1 + 2 + 3 + 4 + 6 + 8 + 12) = 36
Deficiente : soma alíquota < número
8 é um número deficiente porque (1 + 2 + 4) = 7
Os números primos são deficientes
Implemente uma maneira de determinar se um determinado número é perfeito . Dependendo da sua faixa de idioma, você também pode precisar implementar uma maneira de determinar se um determinado número é abundante ou deficiente .
 */

export function classify(numero: number) {
    let soma = 0;

    if(numero <= 0){
        throw new Error('Classification is only possible for natural numbers.')
    }

    for(let i = 0; i < numero; i++){
        if(numero % i === 0){
            soma = soma + i;
        }
    }

    if(soma == numero){
        return "perfect"
    }else if (soma > numero){
        return "abundant"
    }else{
        return "deficient"
    }
}

console.log(classify(28))