//exercicio de loop

function isString(val){
    return typeof val === "string";
}

function vowelsAndConsonants(s){
    isString(s)?"":console.log("error");

    let vogal = ['a','e','i','o','u'];

    for(let i = 0; i < s.length; i++){
        if(vogal.indexOf(s[i]) != -1){
            console.log(s[i]);
        }
    }

    for(let i = 0; i< s.length; i++){
        if(vogal.indexOf(s[i]) == -1){
            console.log(s[i]);
        }
    }
}



/*
a funcao indeOf verifica se tem aqula string, number ou algo do tipo dentro do array, se tiver ele retorna o index de sua posição,
caso não tenha dentro do array, ele retorna -1.
*/

vowelsAndConsonants("javascriptloops");
