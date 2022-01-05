function isNumber(val){
    return typeof val === "number"
}

function isString(val){
    return typeof val === "string"
}

function performOperation(secondInteger, secondDecimal, secondString){
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = "HackerRank";

    if( isNumber(secondInteger) ){
        console.log("numero com certeza")
    }else{
        console.log("aceitamos apenas numeros");
    }

    if ( isNumber(secondDecimal) ){
        console.log("é um numero com certeza");
    }else{
        console.log("aceitamos apenas tipos do numero");
    }

    if( isString(secondString) ){
        console.log("é uma string")
    }else{
        console.log("Aceitamos apenas do tipo string")
    }


    /* como temo muitas validações simples, nesse caso seria melhor usar operador ternario */

    isNumber(secondInteger)? console.log("foi"): console.log("error")


    console.log(firstInteger + secondInteger)
    console.log(firstDecimal + secondDecimal)
    console.log(firstString + secondString)

    /* tambem podemos colocar o + antes da variavel que le vai tentar tranformar me numero, caso nao consigo ele retorna NaN */

    /* porem na programação com somente js, é mais comum o uso da funcao, e ai se queremos algo do somente tipo bolleano mudamos apenas o "number" */

    /* 
    console.log(firstInteger + +(secondInteger))
    console.log(firstDecimal + +(secondDecimal))
    console.log(firstString + secondString)
    */
}

performOperation("12", 4.32, "é o melhor lugar para aprender e praticar codificação");