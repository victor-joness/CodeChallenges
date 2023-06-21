/* Instruções
Implemente um programa que traduza do inglês para o Pig Latin.

Pig Latin é uma linguagem infantil inventada que pretende ser confusa. Ele obedece a algumas regras simples (abaixo), mas quando é falado rapidamente é muito difícil para quem não é criança (e quem não é nativo) entender.

Regra 1 : Se uma palavra começa com som de vogal, adicione um som de "ay" ao final da palavra. Observe que "xr" e "yt" no início de uma palavra formam sons de vogais (por exemplo, "xray" -> "xrayay", "yttria" -> "yttriaay").
Regra 2 : Se uma palavra começa com som de consoante, mova-a para o final da palavra e adicione um som "ay" ao final da palavra. Os sons consonantais podem ser compostos de múltiplas consoantes, também conhecido como encontro consonantal (por exemplo, "chair" -> "airchay").
Regra 3 : Se uma palavra começa com um som de consoante seguido por "qu", mova-o para o final da palavra e adicione um som de "ay" ao final da palavra (por exemplo, "square" -> "aresquay" ).
Regra 4 : Se uma palavra contém um "y" após um encontro consonantal ou como a segunda letra em uma palavra de duas letras, ela produz um som de vogal (por exemplo, "rhythm" -> "ythmrhay", "my" -> "ymay") .
Existem mais algumas regras para casos extremos e também existem variantes regionais.
 */

export function translate(palavra: string): string {
  let resultado = palavra;
  let letra1 = palavra[0];
  let letra2 = palavra[1];
  let letra3 = palavra[2];

  let resultadoFrase = "";

  function testeConsoante(letra: string) {
    if (
      (letra.charCodeAt(0) >= 98 && letra.charCodeAt(0) <= 100) ||
      (letra.charCodeAt(0) >= 102 && letra.charCodeAt(0) <= 104) ||
      (letra.charCodeAt(0) >= 106 && letra.charCodeAt(0) <= 110) ||
      (letra.charCodeAt(0) >= 112 && letra.charCodeAt(0) <= 116) ||
      (letra.charCodeAt(0) >= 118 && letra.charCodeAt(0) <= 122)
    ) {
      return true;
    } else {
      return false;
    }
  }


  if(palavra.split(" ").length > 1){
    for(let i = 0; i < palavra.split(" ").length; i++){
        resultadoFrase += translate(palavra.split(" ")[i]) + " ";
    } 
    resultadoFrase = resultadoFrase.slice(0, resultadoFrase.length - 1);
    return resultadoFrase;
  }

  //vogais
  if (
    letra1 == "a" ||
    letra1 == "e" ||
    letra1 == "i" ||
    letra1 == "o" ||
    letra1 == "u"
  ) {
    resultado += "ay";
    return resultado;
  }

  //sons de vogais
  if ((letra1 == "x" && letra2 == "r") || (letra1 == "y" && letra2 == "t")) {
    resultado += "ay";
    return resultado;
  }

  //palavras que começam com qu
  if (letra1 == "q" && letra2 == "u") {
    resultado = resultado.slice(2, palavra.length) + letra1 + letra2 + "ay";
    return resultado;
  }

  //consoante + qu
  if (testeConsoante(letra1) && letra2 == "q" && letra3 == "u") {
    resultado =
      resultado.slice(3, palavra.length) + letra1 + letra2 + letra3 + "ay";
    return resultado;
  }

  if (testeConsoante(letra1) && letra2 == "y") {
    resultado = resultado.slice(1, palavra.length) + letra1 + "ay";
    return resultado;
  }

  if (
    testeConsoante(letra1) &&
    testeConsoante(letra2) &&
    testeConsoante(letra3)
  ) {
    resultado =
      resultado.slice(3, palavra.length) + letra1 + letra2 + letra3 + "ay";
    return resultado;
  }

  //multiconsoante
  if (testeConsoante(letra1) && testeConsoante(letra2)) {
    resultado = resultado.slice(2, palavra.length) + letra1 + letra2 + "ay";
    return resultado;
  }

  //somente consoante minuscula
  if (testeConsoante(letra1)) {
    resultado = resultado.slice(1, palavra.length) + letra1 + "ay";
    return resultado;
  }

  throw new Error("Remove this statement and implement this function");
}

console.log(translate("xray"));
console.log(translate("yttria"));
console.log(translate("ybtria"));
console.log(translate("chair"));
console.log(translate("square"));
console.log(translate("rhythm"));
console.log(translate("my"));
console.log(translate("queen"));
console.log(translate("thrush"));
console.log(translate("school"));

console.log(translate("quick fast run"));

//Forma que eu consegui

//resposta oficial
export function translate2(phrases: string): string {
    return phrases.split(' ').map(word => {
        switch (true) {
            case /^[aeiou]/.test(word): return slice(word, 0)
            case /^.qu|^thr|^sch/.test(word): return slice(word, 3)
            case /^ch|^qu|^th/.test(word): return slice(word, 2)
            default: return slice(word, 1)
        }
    })
    .join(' ')
}
function slice(word: string, n: number) {
    return word.slice(n) + word.slice(0, n) + 'ay'
}