/* Determine se um triângulo é equilátero, isósceles ou escaleno.

Um triângulo equilátero tem os três lados com o mesmo comprimento.

Um triângulo isósceles tem pelo menos dois lados com o mesmo comprimento. (Às vezes, é especificado como tendo exatamente dois lados do mesmo comprimento, mas para os propósitos deste exercício, diremos pelo menos dois.)

Um triângulo escaleno tem todos os lados de comprimentos diferentes.

Observação
Para que uma forma seja um triângulo, todos os lados devem ter comprimento > 0, e a soma dos comprimentos de quaisquer dois lados deve ser maior ou igual ao comprimento do terceiro lado. Veja Desigualdade do Triângulo .

Cavar mais fundo
O caso em que a soma dos comprimentos de dois lados é igual à do terceiro é conhecido como triângulo degenerado - tem área zero e se parece com uma única linha. Sinta-se à vontade para adicionar seu próprio código/testes para verificar se há triângulos degenerados.
*/

export class Triangle {
    lado1: number;
    lado2: number;
    lado3: number;
    constructor(lado1:number, lado2: number, lado3:number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
  
    get isEquilateral() {
        if(this.lado1 <= 0 || this.lado2 <= 0 ||this.lado3 <= 0){
            return false;
        }

        if((this.lado1 == this.lado2) && (this.lado2 == this.lado3)){
            return true;
        }else{
            return false;
        }
    }
  
    get isIsosceles() {
        if(this.lado1 <= 0 || this.lado2 <= 0 ||this.lado3 <= 0){
            return false;
        }

        

        if((this.lado1 == this.lado2) || (this.lado1 == this.lado3) || (this.lado2 == this.lado3)){
            if(this.lado1 == this.lado2){
                let soma = this.lado1 + this.lado2
                if(soma < this.lado3){
                    return false
                }else{
                 return true;
                } 
             }
     
             if(this.lado1 == this.lado3){
                 let soma = this.lado1 + this.lado3
                 if(soma < this.lado2){
                     return false
                 }else{
                     return true;
                 } 
             }
     
             if(this.lado2 == this.lado3){
                 let soma = this.lado2 + this.lado3
                 if(soma < this.lado1){
                     return false
                 }else{
                     return true;
                 } 
             }
        }else{
            return false;
        }
    }
  
    get isScalene() {
        if(this.lado1 <= 0 || this.lado2 <= 0 ||this.lado3 <= 0){
            return false;
        }

        if((this.lado1 != this.lado2) && (this.lado2 != this.lado3) && (this.lado1 != this.lado3)){
            if(this.lado2 != this.lado3){
                let soma = this.lado2 + this.lado3
                if(soma < this.lado1){
                    return false
                }else{
                    return true;
                } 
            }
    
            if(this.lado1 != this.lado3){
                let soma = this.lado1 + this.lado3
                if(soma < this.lado2){
                    return false
                }else{
                    return true;
                } 
            }
        }else{
            return false;
        }
    }
}

let novo = new Triangle(7, 3, 2);

console.log(novo.isScalene)
