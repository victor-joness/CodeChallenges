function isNumber(val){
    return typeof val === "number";
}


function IsPositive(a){
    isNumber(a)?"":console.log("error, aceitamos apenas numeros");

    let resultado = "YES";

    if(a == 0){
        throw({message:"Zero Error"})
    }
    if(a < 1){
        throw({message:"negative Error"})
    }

    return resultado;
}

console.log(IsPositive(-1));

