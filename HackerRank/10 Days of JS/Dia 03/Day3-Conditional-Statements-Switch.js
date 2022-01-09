//EXERCICIO SOBRE SWITCH

function isString(val){
    return typeof val === "string";
}

function getLetter(s){
    let letter;

    isString(s)?"":console.log("Error, aceitamos apenas strings");

    switch(s[0]){
        case("a" || "e" || "i" || "o" || "u"):
            letter = "A";
            break;
        case("b" || "c" || "d" || "f" || "g"):
            letter = "B";
            break;
        case("h"||"j"||"k"||"l"||"m"):
            letter = "C";
            break;
        case( "z" || "n" || "p" || "q" || "r" || "s" || "v" || "x" || "w" || "y" ):
            letter = "D";
            break;
        default: console.log("não aceitamos esse tipo de entrada");
    }
    return letter;
}

console.log(getLetter("eyr"));
