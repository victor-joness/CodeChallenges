/* - 06: Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

//com a taxa passada em porcentagem de 1 a 100;
function Simples2(cap : number, taxa: number, tempo: number){
    let juros = cap * taxa * tempo / 100;
    let montante = cap + juros
    return montante;
}

console.log(Simples2(1000,10,12));

//duas formas de se fazer juros compostos, uma return montante e a outra apenas os juros

function Composto2(cap : number, taxa: number, tempo: number){
    let juros = cap * Math.pow(1+ taxa, tempo)
    let montante = cap + juros;
    return montante;
}

console.log(Composto2(1000,10,12))

let jurosCompostos2 = (capitalinical : number, juros: number, tempo: number) => {
    let juroscompostos = capitalinical * (1 + juros ) ** tempo
    return `Os Juros Compostos da Aplicação é de: ${juroscompostos}`
}

console.log(jurosCompostos2(1000,10,12))


