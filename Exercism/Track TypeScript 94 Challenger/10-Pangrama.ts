/* Determine se uma frase é um pangrama. Um pangrama (em grego: παν γράμμα, pan gramma, "cada letra") é uma frase que usa cada letra do alfabeto pelo menos uma vez. O pangrama inglês mais conhecido é:

A rápida raposa marrom pula sobre o cachorro preguiçoso.

O alfabeto usado consiste em letras ASCII apara z, inclusive, e não diferencia maiúsculas de minúsculas. A entrada não conterá símbolos não ASCII.
 */

    export function isPangram(frase: string) {
        const regex = /\w/gi
        let frasepronta = frase.split(" ").join("")
        let tamanho = frasepronta.length

        let contador = 0;
        let teste = 0;
        for(let i = 0; i < tamanho; i++){
            if(regex.test(frasepronta[i]) == true){
                contador++
            }else{
                teste++
            }
        }
    }

console.log(isPangram("a quick movement of the enemy will jeopardize five gunboats"));



//resposta

const aToZ = [...Array<string>(26)].map((_, index) => {
    return String.fromCharCode(index + 65)
  })
  
  export function isPangram2(value: string): boolean {
    const myMap = new Map<string, number>()
    aToZ.forEach((key: string) => {
      myMap.set(key.toLowerCase(), 0)
    })
  
    for (const each of value) {
      const item = myMap.get(each) || 0
      myMap.set(each.toLowerCase(), item + 1)
    }
  
    for (const each of myMap.values()) {
      if (each === 0) {
        return false
      }
    }
    return true
  }