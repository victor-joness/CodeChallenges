let palavra = "ana";

function teste(string){
    let tamanho = string.length - 1;
    
    if(string.charAt(0) == string.charAt(tamanho)){
        console.log("true");
    }else {
        console.log("falso");
    }
    
}

teste(palavra);


function regexVar() {
    var re = RegExp(/^([aeiou]).*\1$/);
    return re;
}