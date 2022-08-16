/* 
Um anagrama é um rearranjo de letras para formar uma nova palavra. Dada uma palavra e uma lista de candidatos, selecione a sublista de anagramas da palavra dada.

Dado "listen"e uma lista de candidatos como "enlists" "google" "inlets" "banana"o programa deve retornar uma lista contendo "inlets".
*/

export class Anagram {
    palavra: string;
    arraydepalavra: string[];

    constructor(palavra: string, arraydepalavra:string[]) {
        this.palavra = palavra;
        this.arraydepalavra = arraydepalavra;
    }
  
    public matches(){
        let palavraseparada = this.palavra.split("");
        let contador = 0;
        let resultado = [];

        for(let j = 0; j < this.arraydepalavra.length; j++){
            contador = 0;
            for(let i = 0; i < palavraseparada.length; i++){
                if(this.arraydepalavra[j].includes(palavraseparada[i])){
                    contador++;
                }
            }

            if(contador == this.arraydepalavra[j].length  && this.palavra.length == this.arraydepalavra[j].length){
                resultado.push(this.arraydepalavra[j]);
            }
        }
        return resultado;
    }
}

let novo = new Anagram('listen', ['enlists', 'google', 'inlets', 'banana']);
console.log(novo.matches())

let novo2 = new Anagram('allergy', ['gallery','ballerina','regally','clergy','largely','leading']);
console.log(novo2.matches());

let novo3 = new Anagram('banana', ['Banana']);
console.log(novo3.matches())

let novo4 = new Anagram('ant', ['stand', 'tan', 'at']);
console.log(novo4.matches())

/* resultado oficial - basta colocar Anagram(sem o 2)*/

function sort(input: string): string {
    return input.toString().toLowerCase().split('').sort().join('')
  }
  
  export class Anagram2 {
    private value: string
    constructor(input: string) {
      this.value = input
    }
  
    public matches(...input: string[]): string[] {
      const result: string[] = []
      for (const each of input) {
        if (sort(each) === sort(this.value)) {
          if (each.toLowerCase() === this.value.toLowerCase()) {
            continue
          }
          result.push(each)
        }
      }
      return result
    }
  }