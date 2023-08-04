/* 
Escreva uma função para converter de números normais em algarismos romanos.

Os romanos eram um bando inteligente. Eles conquistaram a maior parte da Europa e a governaram por centenas de anos. Inventaram estradas de concreto e retas e até biquínis. Uma coisa que eles nunca descobriram foi o número zero. Isso tornou a escrita e a datação de extensas histórias de suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles inventaram ainda está em uso hoje. Por exemplo, a BBC usa algarismos romanos para datar seus programas.

Os romanos escreviam números usando letras - I, V, X, L, C, D, M. (observe que essas letras têm muitas linhas retas e, portanto, são fáceis de cortar em tábuas de pedra).
*/

export const toRoman = (numero : number) => {
    let parcial = 0;
    let resto = 0;
    let resultado : Array<string>  =  [];
    
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i = 12;

    while(numero > 0){
        parcial = Math.floor(numero/num[i]);
        console.log(parcial)
        console.log(numero%num[i]);
        numero = numero%num[i];
        for(let j = 0; j < parcial; j++){
            resultado.push(sym[i]);
        }
        i--;
    }

    return resultado.join("");
};

console.log(toRoman(1990));
console.log(toRoman(2000));
console.log(toRoman(8));
console.log(toRoman(900));
console.log(toRoman(90));
console.log(toRoman(3549));