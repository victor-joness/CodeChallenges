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

//Substituir métodos herdados
//fazemos assim como aprendemos antes, a unica diferença é que colocamos o mesmo nome, assim ira sobrescrever o prototype
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = () =>{
  return "Alas, this is a flightless bird."
}

let penguin = new Penguin();
console.log(penguin.fly());

//Use um Mixin para adicionar um comportamento comum entre objetos não relacionados
//Como você viu, o comportamento é compartilhado por meio da herança. No entanto, há casos em que a herança não é a melhor solução. A herança não funciona bem para objetos não relacionados como Birde Airplane. Ambos podem voar, mas a Birdnão é um tipo de Airplanee vice-versa.
//O flyMixinpega qualquer objeto e dá a ele o flymétodo.
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};
  
let plane = {
    model: "777",
    numPassengers: 524
};  
flyMixin(bird);
flyMixin(plane);

//temos outro exemplo aqui
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
let glideMixin = (obj) => {
    obj.glide = () => { 
      console.log("deslizar");
    }
}
  
glideMixin(bird);
glideMixin(boat);

//Use Closure para proteger as propriedades dentro de um objeto de serem modificadas externamente   
//No desafio anterior, birdtinha um imóvel público name. É considerado público porque pode ser acessado e alterado fora da birddefinição do .
//A maneira mais simples de tornar essa propriedade pública privada é criando uma variável dentro da função construtora. 
//Aqui getHatchedEggCountestá um método privilegiado, porque tem acesso à variável privada hatchedEgg. e isso é chamdo de closure

function Bird() {
    let weight = 15;
  
    this.getWeight = () => {
      return weight
    }
}

//Entenda a expressão de função chamada imediatamente (IIFE),Um padrão comum em JavaScript é executar uma função assim que ela é declarada:
//para isso usamos o () no final da funcao e envolta dela mesma, fazemos isso com funcoes anonimas, 
(function () {
    console.log("Chirp, chirp!");
})();

//ex2
(() => {
    console.log("A cozy nest is ready");
})();

//Use um IIFE para criar um módulo
//Uma expressão de função imediatamente invocada (IIFE) é frequentemente usada para agrupar funcionalidades relacionadas em um único objeto ou módulo . Por exemplo, um desafio anterior definiu dois mixins:
//Observe que você tem uma expressão de função imediatamente invocada (IIFE) que retorna um objeto motionModule. Este objeto retornado contém todos os comportamentos do mixin como propriedades do objeto. A vantagem do padrão de módulo é que todos os comportamentos de movimento podem ser empacotados em um único objeto que pode ser usado por outras partes do seu código. Aqui está um exemplo usando-o:

let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
})();

//guardamos 2 propriedades que sao mixin dentro de motionModule, assim conseguimos modular e encapsular mt bem nosso codigo
motionModule.glideMixin(duck);
duck.glide();

//Crie um módulo chamado funModulepara agrupar os dois mixins isCuteMixine singMixin. funModuledeve retornar um objeto.

let funModule = (( ) => { 
    return {
    isCuteMixin : function(obj) {
         obj.isCute = function() {
         return true;
      }
    },
    singMixin : function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
    }
  })();

  //temos que lembrar de usar : pois ainda sim é um objeto e tbm temos que usar o return