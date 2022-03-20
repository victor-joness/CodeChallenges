/* Para um jogo de Dungeons & Dragons , cada jogador começa gerando um personagem com o qual pode jogar. Este personagem tem, entre outras coisas, seis habilidades; força, destreza, constituição, inteligência, sabedoria e carisma. Essas seis habilidades têm pontuações que são determinadas aleatoriamente. Você faz isso rolando quatro dados de 6 faces e registrando a soma dos três maiores dados. Você faz isso seis vezes, uma vez para cada habilidade.

Os pontos de vida iniciais do seu personagem são 10 + modificador de constituição do seu personagem. Você encontra o modificador de constituição do seu personagem subtraindo 10 da constituição do seu personagem, divida por 2 e arredondando para baixo.

Escreva um gerador de caracteres aleatórios que siga as regras acima.

Por exemplo, os seis lançamentos de quatro dados podem ser assim:

5, 3, 1, 6: Você descarta o 1 e soma 5 + 3 + 6 = 14, que você atribui à força.
3, 2, 5, 3: Você descarta o 2 e soma 3 + 5 + 3 = 11, que você atribui à destreza.
1, 1, 1, 1: Você descarta o 1 e soma 1 + 1 + 1 = 3, que você atribui à constituição.
2, 1, 6, 6: Você descarta o 1 e soma 2 + 6 + 6 = 14, que você atribui à inteligência.
3, 5, 3, 4: Você descarta o 3 e soma 5 + 3 + 4 = 12, que você atribui à sabedoria.
6, 6, 6, 6: Você descarta o 6 e soma 6 + 6 + 6 = 18, que você atribui ao carisma.
Como a constituição é 3, o modificador de constituição é -4 e os pontos de vida são 6.
 */

export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;
    modificador: number;

    constructor(){
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.modificador = Math.floor(Number(((this.getconstitution() - 10) / 2)));
        this.hitpoints = 10 + this.getmodificador();
    }

    getstrength(){
        return this.strength;
    }

    setstrength(valor : number){
        this.strength = valor
    }

    getdexterity(){
        return this.dexterity;
    }

    setdexterity(valor : number){
        this.dexterity = valor
    }

    getconstitution(){
        return this.constitution;
    }

    setconstitution(valor : number){
        this.constitution = valor
    }

    getintelligence(){
        return this.intelligence;
    }

    setintelligence(valor : number){
        this.intelligence = valor
    }

    getwisdom(){
        return this.wisdom;
    }

    setwisdom(valor : number){
        this.wisdom = valor
    }

    getcharisma(){
        return this.charisma;
    }

    setcharisma(valor : number){
        this.charisma = valor
    }

    gethitpoints(){
        return this.hitpoints;
    }

    sethitpoints(valor : number){
        this.hitpoints = valor
    }

    getmodificador(){
        return this.modificador;
    }

    setmodificador(valor : number){
        this.modificador = valor
    }



    public static generateAbilityScore(): any {
        let valores = [];
        for(let i = 0; i < 4; i++){
            valores.push(Math.floor(Math.random() * 6 + 1)) //gerando dados aleatoria de 1 a 6 e colocando no valores
        }

        let menor = valores[0];
        //pegando o menor valor
        for(let i = 0; i < valores.length; i++){
            if(valores[i] < menor){
                menor = valores[i]
            }
        }

        //descobrindo o index do menor elemento dentro do vetor
        let index = valores.indexOf(menor)
        //removendo o menor valor do array valores.
        valores.splice(index,1)
        //return o vetor com os valores certinhos.
        return valores.reduce((soma, i) => {
            return soma + i;
        })
    }
}


const character = new DnDCharacter();
console.log(character);

//resposta

export class DnDCharacter2 {
    public readonly hitpoints: number
  
    public readonly strength: number
    public readonly dexterity: number
    public readonly constitution: number
    public readonly intelligence: number
    public readonly wisdom: number
    public readonly charisma: number
  
    constructor() {
      this.strength = DnDCharacter.generateAbilityScore()
      this.dexterity = DnDCharacter.generateAbilityScore()
      this.constitution = DnDCharacter.generateAbilityScore()
      this.intelligence = DnDCharacter.generateAbilityScore()
      this.wisdom = DnDCharacter.generateAbilityScore()
      this.charisma = DnDCharacter.generateAbilityScore()
  
      this.hitpoints = Number(10 + Number(DnDCharacter2.getModifierFor2(this.constitution)));
    }
  
    public static generateAbilityScore(): number {
      return this.rollDice(4)
        .sort()
        .slice(1, 4)
        .reduce((acu, act) => acu + act, 0)
    }
  
    public static getModifierFor2(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2)
    }
  
    private static rollDice(quantity: number): number[] {
      return new Array<number>(quantity).fill(0).map(() => this.rollDie())
    }
  
    private static rollDie(): number {
      return Math.floor(Math.random() * 6) + 1
    }
  }


const character2 = new DnDCharacter2();
console.log(character2);