//Criar um objeto JavaScript básico
let dog = {
    name: "hercules",
    numLegs: 2
};
console.log(dog);
//Use a notação de ponto para acessar as propriedades de um objeto
let dog2 = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);

//Criar um método em um objeto
//Os objetos podem ter um tipo especial de propriedade, chamado método .  Métodos são propriedades que são funções. 
//Isso adiciona um comportamento diferente a um objeto. Aqui está o duckexemplo com um método:
let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => {
        return `This dog has ${dog.numLegs} legs.`
    }
};


//Torne o código mais reutilizável com esta palavra-chave this, ela é boa pois caso o nome da variavel mude, a funcao continua funcionando
let dog4 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

//Definir uma função construtora
function Dog(){
    this.name = "",
    this.color = "",
    this.numLegs = 0
}
//temos 2 formas de fazer isso
class Dog5{
    constructor(){
        this.name = "",
        this.color = "",
        this.numLegs = 0
    }
}

//Use um construtor para criar objetos
let hound = new Dog();
hound.name = "hercules";
console.log(hound)

//Estender construtores para receber argumentos
function Dog3(name, color){
    this.name = name,
    this.color = color,
    this.numLegs = 4
}

let terrier = new Dog3("hercules", "yellow")

//Verifique o construtor de um objeto com instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
console.log(myHouse instanceof House);

//Compreender Propriedades Próprias
  