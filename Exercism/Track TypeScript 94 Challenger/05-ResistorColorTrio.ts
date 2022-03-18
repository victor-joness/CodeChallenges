/* m resistor-color duovocê decodificou as duas primeiras cores. Por exemplo: orange-orange obteve o valor principal 33. A terceira cor representa quantos zeros precisam ser adicionados ao valor principal. O valor principal mais os zeros nos dá um valor em ohms. Para o exercício não importa quais são realmente os ohms. Por exemplo:

laranja-laranja-preto seria 33 e nenhum zero, que se torna 33 ohms.
laranja-laranja-vermelho seria 33 e 2 zeros, o que se torna 3300 ohms.
laranja-laranja-laranja seria 33 e 3 zeros, o que se torna 33.000 ohms.
(Se você gosta de matemática, talvez queira pensar nos zeros como expoentes de 10. Se não gosta de matemática, vá com os zeros. É realmente a mesma coisa, apenas em inglês simples em vez de linguagem matemática.)

Este exercício é sobre traduzir as cores em um rótulo:

"... ohm"

Portanto, uma entrada de "orange", "orange", "black"deve retornar:

"33ohms"

Quando temos mais de mil ohms, dizemos "kiloohms". Isso é semelhante a dizer "quilômetro" para 1.000 metros e "quilogramas" para 1.000 gramas. Portanto, uma entrada de "orange", "orange", "orange"deve retornar:

"33 kiloohms"

 */

export function decodedResistorValue( array: string[]){
    let soma = "";
    let zeros = 0;
    
    for(let i = 0; i < 2; i++){
        if(COLORS.indexOf(array[i]) != -1){
            soma = soma + COLORS.indexOf(array[i])
        }
    }

    if(array.length > 2){
        if(COLORS.indexOf(array[2]) != -1){
            zeros = COLORS.indexOf(array[2]);
        }
    }

    for(let i = 0; i < zeros; i++){
        soma = soma + 0
    }

    let somaNumber = Number(soma);

    if(Number(soma) >= 1000){
        return `${Number(somaNumber / 1000)} kiloohms`
    }else{
        return `${Number(soma)} ohms`
    }
}

const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
]

console.log(decodedResistorValue(['blue', 'grey', 'brown']))