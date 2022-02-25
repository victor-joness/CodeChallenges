/* - 06: Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function Simples(cap, taxa, tempo){
    if( typeof cap !== "number" || typeof taxa !== "number" ||typeof tempo !== "number"){
        return "Uma das entradas é invalida"
    }

    let juros = cap * taxa * tempo / 100;
    let montante = cap + juros
    return montante;
}

console.log(Simples());


//duas formas de se fazer juros compostos, uma return montante e a outra apenas os juros

function Composto22(cap , taxa, tempo){
    let juros = cap * Math.pow(1+ taxa, tempo)
    let montante = cap + juros;
    return montante;
}

console.log(Composto22(1000,10,12))

let jurosCompostos22 = (capitalinical, juros, tempo) => {
    let juroscompostos = capitalinical * (1 + juros ) ** tempo
    return `Os Juros Compostos da Aplicação é de: ${juroscompostos}`
}

console.log(jurosCompostos22(1000,10,12))