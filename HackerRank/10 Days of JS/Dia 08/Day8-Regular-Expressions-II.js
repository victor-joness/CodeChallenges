let palavra = "Er.Abc";

function verificar(string = ""){

    if(string.includes(("Dr.")) || string.includes(("Mr.")) || string.includes(("Mrs")) || string.includes(("Ms.")) || string.includes(("Er.")) ){
        console.log("verdadeiro");
    }else{
        console.log("falso");
    }
}

verificar(palavra);

function regexVar() {
    var re = (/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);
   return re;
}