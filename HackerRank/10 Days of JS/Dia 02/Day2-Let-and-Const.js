//trabalhando com const e let

const PI = Math.PI;

function isNumber(val){
    return typeof val === "number"
}

function getArea(r){

    isNumber(r)?"":console.log("error, a entrada não é um number");

    if(r < 0 || r > 100){
        console.log("error, aceitamos apenas raio entre 0 e 100");
    }

    return (PI * (r * r));
}

function getPerimetro(r){
    isNumber(r)?"":console.log("error, a entrada não é um number");

    if(r < 0 || r > 100){
        console.log("error, aceitamos apenas raio entre 0 e 100");
    }

    return 2 * PI * r;
}

console.log(getArea(5));
console.log(getPerimetro(5));