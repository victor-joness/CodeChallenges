/* Instruções
Two-ferou 2-feré curto para dois para um. Um para você e outro para mim.

Dado um nome, retorne uma string com a mensagem:

One for name, one for me.
Onde "nome" é o nome dado.

No entanto, se o nome estiver ausente, retorne a string:

One for you, one for me.
aqui estão alguns exemplos:

Nome	String para retornar
Alice	Um para Alice, um para mim.
Prumo	Um para Bob, um para mim.
        Um para você, um para mim.
Zaphod	Um para Zaphod, outro para mim.
 */

export function twofer(name : string = "you"):string{
        return `One for ${name}, one for me.`
}

console.log(twofer());