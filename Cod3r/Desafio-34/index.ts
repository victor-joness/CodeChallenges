/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function verificar2(string1: string, string2: string){
    let str1 = string1.toLowerCase();
    let str2 = string2.toLowerCase();

    let contador = 0;

    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i] == str2[j]){
                contador++
            }
        }
    }

    if(contador >= str1.length){
        return true;
    }else{
        return false;
    }
}

console.log(verificar2("victro", "ovictr"));