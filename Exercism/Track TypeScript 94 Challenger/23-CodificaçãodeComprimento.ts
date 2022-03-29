/* Instruções
Implemente a codificação e a decodificação de comprimento de execução.

A codificação de comprimento de execução (RLE) é uma forma simples de compactação de dados, em que as execuções (elementos de dados consecutivos) são substituídas por apenas um valor de dados e contagem.

Por exemplo, podemos representar os 53 caracteres originais com apenas 13.

"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
O RLE permite que os dados originais sejam perfeitamente reconstruídos a partir dos dados compactados, o que o torna uma compactação de dados sem perdas.

"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
Para simplificar, você pode supor que a string não codificada conterá apenas as letras de A a Z (maiúsculas ou minúsculas) e espaços em branco. Dessa forma, os dados a serem codificados nunca conterão nenhum número e os números dentro dos dados a serem decodificados sempre representam a contagem do caractere a seguir.
*/

export function encode(string: string) {
    let resultado:string[] = [];
    let contador = 1;
    let parcial = "";
    let stringfinal = string.split("")

    for(let i = 0; i < stringfinal.length; i++){
        if(stringfinal[i] == stringfinal[i + 1]){
            contador++;
        }else{
            parcial = contador + stringfinal[i]   
            contador = 1;
            resultado.push(parcial)
        }
    }

    for(let i = 0; i < resultado.length;i++){
        if((resultado[i][0] == "1") && (resultado[i].length == 2)){
            resultado[i] = resultado[i].slice(-1);
        }
    }

    return resultado.join("");
}
  
export function decode(cypher: string): string {
    return cypher.replace(/(\d+)(\w|\s)/g, (_match, repeats, char) => {
      return new Array(Number(repeats) + 1).join(char)
    })
}

console.log(encode("XYZ"))
console.log(encode('AABBBCCCC'))
console.log(encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB'));
console.log(decode('2A3B4C'));
console.log(decode('12WB12W3B24WB'));
console.log(decode('2 hs2q q2w2 '));
console.log(decode('XYZ'));