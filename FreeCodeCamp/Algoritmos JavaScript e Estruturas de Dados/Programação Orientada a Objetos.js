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

//Entenda a Propriedade do Construtor,Observe que a constructorpropriedade é uma referência à função construtora que criou a instância. A vantagem da constructorpropriedade é que é possível verificar 
//essa propriedade para descobrir que tipo de objeto ela é. Aqui está um exemplo de como isso pode ser usado:

function Dog(name) {
    this.name = name;
}
  
// Only change code below this line
function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
        return true;
    }else{
        return false;
    }
}

//Alterar o protótipo para um novo objeto,Uma maneira mais eficiente é definir o prototypecomo um novo objeto que já contém as propriedades. Desta forma, as propriedades são adicionadas de uma só vez:

function Dog(name) {
    this.name = name;
}
  
//desta forma o prototype recebe 3 propriedade de uma vez e adiciona a dog
Dog.prototype = {
    numLegs: 2,
    eat: () => {
        console.log("nom nom nom");
    },
    describe: () =>{
        console.log("My name is " + this.name);
    }
};

//Lembre-se de definir a propriedade do construtor ao alterar o protótipo,
//Há um efeito colateral crucial de configurar manualmente o protótipo para um novo objeto. Ele apaga a constructorpropriedade! 
duck.constructor === Bird; //return false
duck.constructor === Object; //return true
duck instanceof Bird; //return true
//Para corrigir isso, sempre que um protótipo for definido manualmente para um novo objeto, lembre-se de definir a constructorpropriedade:
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  //Entenda de onde vem o protótipo de um objeto
  //Assim como as pessoas herdam genes de seus pais, um objeto herda prototypediretamente da função construtora que o criou. Por exemplo, aqui o Birdconstrutor cria o duckobjeto:
  //Use isPrototypeOfpara verificar o prototypede beagle.

function Dog(name) {
    this.name = name;
}
  
let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));

//Entenda a cadeia de protótipos, Todos os objetos em JavaScript (com algumas exceções) têm uma extensão prototype. Além disso, o prototypepróprio objeto é um objeto.
//Como a prototypeé um objeto, a prototypepode ter seu próprio prototype! Neste caso, o prototypede Bird.prototypeé Object.prototype:
//Portanto, qualquer objeto pode usar o hasOwnPropertymétodo.
function Dog(name) {
    this.name = name;
}
  
let beagle = new Dog("Snoopy");
  
Dog.prototype.isPrototypeOf(beagle);  // yields true
  
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//Use a herança para não se repetir
//O eatmétodo é repetido em ambos Cate Bear. Edite o código no espírito de DRY movendo o eatmétodo para o arquivo Animal supertype.
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
      }
  };

//Defina o protótipo do filho para uma instância do pai
//Modifique o código para que as instâncias de Dogherdar de Animal.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// com isso, dog tera acesso a todos os prototypes de animais, e fazemos a herança mais simples desse jeito
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

//Redefinir uma propriedade de construtor herdada
//Quando um objeto herda prototypede outro objeto, ele também herda a propriedade de construtor do supertipo.   
//Mas ducke todas as instâncias de Birddevem mostrar que foram construídas por Birde não Animal. Para fazer isso, você pode definir manualmente a propriedade do construtor Birdpara o Birdobjeto:
//Corrija o código assim duck.constructore beagle.constructorretorne seus respectivos construtores.

function Animal() { }
function Bird() { }
function Dog() { }

//aqui eles estavam com o construtor animais
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

//aqui eu mudei eles para o construtor de origen, e ainda sim continuam recebem as propiedades de animais
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

//Adicionar métodos após a herança, podemos fazer isso manualmente, assim como foi ensinado antes
Bird.prototype.fly = function() {
    console.log("I'm flying!");
  };
//Uma função construtora que herda seu prototypeobjeto de uma função construtora de supertipo ainda pode ter seus próprios métodos além dos métodos herdados.
//Adicione todo o código necessário para que o Dogobjeto seja herdado Animale o Dogconstrutor do prototypeseja definido como Dog. Em seguida, adicione um bark()método ao Dogobjeto para que beagleambos eat()e bark(). O bark()método deve imprimir Woof!no console.

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => {
  console.log("Woof!")
}
let beagle = new Dog();

//


