/* - 14: Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

function frutas2(fruta : string){
    switch (fruta) {
        case "maçã":
            return `Não vendemos esta fruta aqui`
        case "kiwi":
            return `stamos com
            escassez de kiwis`
        case "melancia":
            return `Aqui está, são 3 reais o quilo`
        default:
            return `Error, fruta não encontrada`
      }
}

let verfrutas2 = (fruta: string) => {
    switch (fruta) {
        case "maçã":
            return `Não vendemos esta fruta aqui`
        case "kiwi":
            return `stamos com
            escassez de kiwis`
        case "melancia":
            return `Aqui está, são 3 reais o quilo`
        default:
            return `Error, fruta não encontrada`
      }
}

console.log(frutas2("melancia"))
console.log(verfrutas2("banana"))