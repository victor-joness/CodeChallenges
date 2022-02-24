/* - 04: Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function calcular2(dividendo, divisor){
    if( typeof dividendo !== "number" || typeof divisor !== "number"){
        return "Uma das entradas é invalida"
    }
    let div = dividendo / divisor;
    let resto = dividendo % divisor;

    return `O resultado é ${parseInt(div)} e o resto é ${resto}`
}
console.log(calcular2(10,4))