/* Em um país imaginário denominado Lisarb, todos os habitantes ficam felizes em pagar seus impostos, pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, sem qualquer desvio. A moeda deste país é o Rombus, cujo símbolo é o R$.

Leia um valor com duas casas decimais, equivalente ao salário de uma pessoa de Lisarb. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.



Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.

 */

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */
var lines = [1701.12]/* input.split('\n').map(Number); */

if(lines[0] <= 2000.00){
    console.log("Isento")
}else if(lines[0] > 2000.00 && lines[0] <=3000.00){
    let valor = (8 * (lines[0] - 2000)) / 100;
    console.log("R$ " + valor.toFixed(2));
}else if(lines[0] > 3000.00 && lines[0] <= 4500.00){
    let valor = ((18 * (lines[0] - 3000)) / 100) + 8 * 1000 / 100;
    console.log("R$ " + valor.toFixed(2));
}else{
    let valor = (28 * (lines[0] - 4500) / 100) + (18 * 1500 / 100) + 1000 * 8 / 100;
    console.log("R$ " + valor.toFixed(2));
}