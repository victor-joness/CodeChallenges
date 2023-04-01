/* 
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */
var lines = [2200.00]; /* input.split('\n').map(Number); */

if(lines[0] >= 0 && lines[0] <= 400.00){
    console.log(`Novo salario: ${(lines[0] * 1.15).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(lines[0] * 0.15).toFixed(2)}`);
    console.log("Em percentual: 15 %");
}else if(lines[0] >= 400.01 && lines[0] <= 800.00){
    console.log(`Novo salario: ${(lines[0] * 1.12).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(lines[0] * 0.12).toFixed(2)}`);
    console.log("Em percentual: 12 %");
}else if(lines[0] >= 800.01 && lines[0] <= 1200.00){
    console.log(`Novo salario: ${(lines[0] * 1.10).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(lines[0] * 0.10).toFixed(2)}`);
    console.log("Em percentual: 10 %");
}else if(lines[0] >= 1200.01 && lines[0] <= 2000.00){
    console.log(`Novo salario: ${(lines[0] * 1.07).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(lines[0] * 0.07).toFixed(2)}`);
    console.log("Em percentual: 7 %");
}else{
    console.log(`Novo salario: ${(lines[0] * 1.04).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(lines[0] * 0.04).toFixed(2)}`);
    console.log("Em percentual: 4 %");
}