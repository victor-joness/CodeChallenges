//exercicio de classes

class Polygon{
    constructor(valores){
        this.valores = valores;
        let soma = 0;

        for(let i = 0; i < valores.length; i++){
            soma = soma + valores[i];
        }

        this.somatotal = soma;
    }

    perimetro(){
        return this.somatotal;
    }

}

let triangulo = new Polygon([ 3, 4, 5]);

console.log(triangulo.perimetro()); 
