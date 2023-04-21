/* 
Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.
*/

let lines = ["8", "1", "7", "2", "2", "4"];

let alcool = 0;
let gasolina = 0;
let disel = 0;

for(let i = 0; i < lines.length; i++){
    let [x] = lines[i].split("").map((item) => parseInt(item));

    if(x == 1){
        alcool++;
    }else if(x == 2){
        gasolina++;
    }else if(x == 3){
        disel++;
    }else if(x == 4){
        console.log(`MUITO OBRIGADO`);
        console.log(`Alcool: ${alcool}`);
        console.log(`Gasolina: ${gasolina}`);
        console.log(`Diesel: ${disel}`);
    }
}