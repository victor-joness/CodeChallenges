//MINHA RESPOSTA
function caesarCipher(s,k){
    let string = s.split('');
    let n = s.length;
    let stringCod = [];
    let resultado = [];

    for(let i = 0; i < n; i++){
        if(string[i].charCodeAt() >= 91 && string[i].charCodeAt() < 97){
            stringCod.push(string[i].charCodeAt());
        }

        if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){
            let valorParcial = string[i].charCodeAt() + k;

            //modificar as letras que passam de 122, que e todas as maisculas com minusculas.
            while(valorParcial > 90){
                valorParcial = valorParcial - 26;
                //console.log(valorParcial - 26)
            }

            stringCod.push(valorParcial);
        }

        if(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122){
            let valorParcial = string[i].charCodeAt() + k;

            //modificar as letras que passam de 122, que e todas as maisculas com minusculas.
            while(valorParcial > 122){
                valorParcial = valorParcial - 26;
                //console.log(valorParcial - 26)
            }

            stringCod.push(valorParcial);
        }

        if(string[i].charCodeAt() <= 64 || string[i].charCodeAt() >= 123){
            
            stringCod.push(string[i].charCodeAt());
        }
    }
        

    //convertendo de numero para letra em um array
    for(let i = 0; i < n; i++){
        console.log(stringCod)
        resultado.push(String.fromCharCode(stringCod[i]));
    }

    console.log("a".charCodeAt())
    //console.log(string[4].charCodeAt())
    //console.log(stringCod[4])
    //console.log(String.fromCharCode(string[5]))
    //console.log(String.fromCharCode(stringCod[5]))
    //console.log(teste)
    //console.log(String.fromCharCode())
    //juntado todos os valores do array
    return resultado.join('');
}

//console.log(caesarCipher("middle-Outz", 2));
//console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));
console.log(caesarCipher("!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U",62))
console.log(caesarCipher("Hello_World!",4));
console.log(caesarCipher("DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.",45))

//RESPOSTA MAIS EFICIENTE/MELHRO
function caesarCipher2(s, k) {
    // Write your code here
    let o=''
    k %= 26
    for(let i=0;i<s.length;i++){
        let f = s.charAt(i).charCodeAt(0)
        if(f >= 65 && f<=90){
            f += k
            if(f>90) f-=26
            else if(f<65) f+=26
        }else if(f>=97 && f<=122){
            f += k
            if(f>122) f-=26
            else if(f<97) f+=26
        }
        o+=String.fromCharCode(f)
    }
   console.log(o)
   return o
}