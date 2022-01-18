//testando herança em js

class Retangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    isArea(){
        return this.base * this.altura;
    }
}

class Square extends Retangulo{
    constructor(base, altura){
        super(base, altura);
    }
}

let nret = new Retangulo(10,20);

console.log(nret.isArea());

let nsquare = new Square(10,10);

console.log(nsquare.isArea());