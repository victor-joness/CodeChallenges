/* - 04: Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */


function calcular22(dividendo: number, divisor: number){
    
    let div = dividendo / divisor;
    let resto = dividendo % divisor;
    

    return `O resultado é ${parseInt(div.toString())} e o resto é ${resto}`
}
console.log(calcular22(10,3))