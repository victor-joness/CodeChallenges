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

//Compreender Propriedades Próprias, Adicione as próprias propriedades de canaryà matriz ownProps.

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
//Use as propriedades do protótipo para reduzir o código duplicado, Como numLegsprovavelmente terá o mesmo valor para todas as instâncias de Bird, você terá essencialmente 
//uma variável duplicada numLegsdentro de cada Birdinstância. para acabar com isso usamos o prototype, definindo de uma forma geral todos daquela classe.
//eai definimos isso fora do escopo da classe
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 1
let beagle = new Dog("Snoopy");
//agora todos os derivados de dog e os propios objetos de dog tem a numLegs definida em 1, sem necessidade de duplicar informação

//Iterar sobre todas as propriedades, Aqui está como você adiciona duckas próprias propriedades ao array ownPropse prototypeas propriedades ao array prototypeProps:

function Bird(name) {
    this.name = name;  //own property
}
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");

let ownProps2 = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps2);
console.log(prototypeProps);

//Entenda a Propriedade do Construtor,