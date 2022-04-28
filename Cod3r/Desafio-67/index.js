/* 
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
*/

const inverter = (objeto) => {
    const objeto2 = {};
    let valores = Object.values(objeto);
    let chaves = Object.keys(objeto);

    for(let i = 0; i < chaves.length; i++){
        objeto2[valores[i]] = chaves[i];
    }
    
    return objeto2;
    
}

console.log(inverter({ a: 1, b: 2, c: 3}));

//outra forma de se fazer

function inverter2(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}

console.log(inverter2({ a: 1, b: 2, c: 3}));