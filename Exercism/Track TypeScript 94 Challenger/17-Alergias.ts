/* Dada a pontuação de alergia de uma pessoa, determine se ela é ou não alérgica a um determinado item e sua lista completa de alergias.

Um teste de alergia produz uma pontuação numérica única que contém as informações sobre todas as alergias que a pessoa tem (para as quais foi testada).

A lista de itens (e seu valor) que foram testados são:

ovos (1)
amendoim (2)
marisco (4)
morangos (8)
tomates (16)
chocolate (32)
pólen (64)
gatos (128)
Então, se Tom é alérgico a amendoim e chocolate, ele recebe uma pontuação de 34.

Agora, dada apenas essa pontuação de 34, seu programa deve ser capaz de dizer:

Se Tom é alérgico a qualquer um dos alérgenos listados acima.
Todos os alérgenos aos quais Tom é alérgico.
Nota: uma determinada pontuação pode incluir alérgenos não listados acima (ou seja,
alérgenos com pontuação 256, 512, 1024, etc.). Seu programa deve ignorar esses componentes da partitura. 
Por exemplo, se a pontuação de alergia for 257, seu programa deve relatar apenas a alergia a ovos (1).
 */

export class Allergies {
    private allergenIndex: number
  
    private possibleAllergies = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats',
    ] as const
  
    constructor(allergenIndex: number) {
      this.allergenIndex = allergenIndex
    }
  
    public allergicTo(food: string): boolean {
      let isAllergic = false
  
      const allergyList = this.list()
      for (const allergy of allergyList) {
        if (allergy === food) {
          isAllergic = true
          break
        }
      }
  
      return isAllergic
    }
  
    public list(): string[] {
      const possibleAllergies = this.possibleAllergies
      const allergicTo = []
  
      for (let i = 0; i < possibleAllergies.length; i++) {
        const allergy = possibleAllergies[i]
        if (this.allergenIndex & Math.pow(2, i)) {
          allergicTo.push(allergy)
        }
      }
  
      return allergicTo
    }
}

const allergies = new Allergies(1)
const allergies2 = new Allergies(5)
console.log(allergies.allergicTo("egg")) //eggs
console.log(allergies2.allergicTo("strawberries")) //eggs, shellfish, e false pro resto