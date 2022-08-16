/* 
Instruções
Dada uma string de dígitos, produza todas as substrings contíguas de comprimento nnessa string na ordem em que aparecem.

Por exemplo, a string "49142" tem a seguinte série de 3 dígitos:

"491"
"914"
"142"
E a seguinte série de 4 dígitos:

"4914"
"9142"
E se você pedir uma série de 6 dígitos de uma string de 5 dígitos, você merece o que quer que receba.

Observe que essas séries só precisam ocupar posições adjacentes na entrada; os dígitos não precisam ser numericamente consecutivos .
*/

export class Series {
    numero: number;
    constructor(numero: string) {
        this.numero = Number(numero);
    }
  
    slices(sliceLength: number){
        let resultado = [];
        let tamanho = this.numero.toString().length;
        let numeroseparado = this.numero.toString().split("");
        let contador = 0;
        let resultadoOficial = [];

        if (sliceLength < 0) {
            throw new Error('slice length cannot be negative')
        }
      
        if (sliceLength === 0) {
            throw new Error('slice length cannot be zero')
        }

        if(sliceLength > tamanho){
            throw new Error('slice length cannot be greater than series length');
        }else{
            for(let i = 0; i < tamanho; i++){
                resultado.push(numeroseparado.slice(i,sliceLength + contador));
                contador++
            }
        }

        for(let k = 0; k < resultado.length; k++){
            if(resultado[k].length == sliceLength){
                resultadoOficial.push(resultado[k]);
            }
        }

        return resultadoOficial;
    }
}


let novo = new Series("9142");
console.log(novo.slices(2))

let novo2 = new Series('918493904243');
console.log(novo2.slices(5))

//consegui fazer perfeitamente, porem ta dando error no exercism pq eu coloquei dentro do array Strings, e ele queria numeros.
//coneço 2 formas de fazer isso com map e com for, ou fazendo des do inicio com numeros convertidos, porem to sem tempo.

//RESULTADO OFICIAL;

export class Series2 {
    private readonly numberString: string
    private readonly digits: number[]
  
    constructor(numberString: string) {
      if (!numberString) {
        throw new Error('series cannot be empty')
      }
  
      this.numberString = numberString
      this.digits = this.getDigits()
    }
  
    private getDigits(): number[] {
      return [...this.numberString].map((digit) => parseInt(digit, 10))
    }
  
    public slices(sliceSize: number): number[][] {
      const result: number[][] = []
      let slice: number[] = []
  
      if (sliceSize < 0) {
        throw new Error('slice length cannot be negative')
      }
  
      if (sliceSize === 0) {
        throw new Error('slice length cannot be zero')
      }
  
      if (sliceSize > this.digits.length) {
        throw new Error('slice length cannot be greater than series length')
      }
  
      for (let i = 0; i < this.digits.length - sliceSize + 1; i += 1) {
        for (let j = 0; j < sliceSize; j += 1) {
          slice.push(this.digits[i + j])
        }
        result.push(slice)
        slice = []
      }
  
      return result
    }
  }