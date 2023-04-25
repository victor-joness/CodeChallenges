/* 
Este programa deve ler uma variável inteira X inúmeras vezes (deve parar quando o valor no arquivo de entrada for igual a zero). Para cada valor lido imprima a sequência de 1 até X, com um espaço entre cada número e seu sucessor.

Obs: cuide para não deixar espaço em branco após o último valor apresentado na linha ou você receberá Presentation Error.
*/

let lines = ["5", "10", "3", "0"];

let array = [];

for(let i = 0; i < lines.length; i++){
    array = [];
    let [x] = lines[i].split(" ").map((item) => parseInt(item));

    if(x == 0) return 0;

    for(let j = 1; j <= x; j++){
        array.push(j);
    }

    console.log(array.join(" "));
}