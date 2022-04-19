/* 
Gerencie as configurações de fábrica do robô.

Quando um robô sai do chão de fábrica, ele não tem nome.

Na primeira vez que você liga um robô, um nome aleatório é gerado no formato de duas letras maiúsculas seguidas de três dígitos, como RX837 ou BC811.

De vez em quando, precisamos redefinir um robô para as configurações de fábrica, o que significa que seu nome é apagado. Na próxima vez que você perguntar, esse robô responderá com um novo nome aleatório.

Os nomes devem ser aleatórios: não devem seguir uma sequência previsível. Usar nomes aleatórios significa um risco de colisões. Sua solução deve garantir que cada robô existente tenha um nome exclusivo.
*/

export class Robot {
    name: string;
    id: number;
    contador: number;

    constructor(id: number){
        this.id = id;
        this.contador = 1;
        this.name = "";
    }

    getName(): string{
        return this.name;
    }

    setName(){
        let numbers = [0,1,2,3,4,5,6,7,8,9]
        let letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        //gerar index aleatorio;
        let indexletras = 0;
        let indexNumeros = 0;
        let nome = [];

        for(let i = 0; i <= 5; i++){
             nome = []
             //add as letras iniciais
             indexletras = Number((Math.random() * (letras.length - 1)).toFixed());
             console.log(indexletras)
             for(let j = 0; j < 2; j++){
                nome.push(letras[indexletras])
                 indexletras = Number((Math.random() * (letras.length - 1)).toFixed());
             }

            //add os numeros iniciais
            indexNumeros = Number((Math.random() * (numbers.length - 1)).toFixed());
            console.log(indexNumeros)
            for(let k = 0; k < 3; k++){
                nome.push(numbers[indexNumeros])
                indexNumeros = Number((Math.random() * (numbers.length - 1)).toFixed());
            }
        }
        this.contador = this.contador + 1;
        this.name = nome.join("");
    }
  
    public resetName(): void {
        return this.setName();
    }
}

let novo = new Robot(1);
console.log(novo)
novo.setName();
console.log(novo);
console.log(novo.getName());
novo.resetName();
console.log(novo);
console.log(novo.getName())