//criando um reatngulo functiuon

function Retangulo(a , b){
    //restriçoes        
    if(  ((a < 1) || (b < 1)) || ( (a > 100) || (b > 100) ) ){
        console.log("Error-Aceitamos apenas numeros entre 1 e 100");
    }
    this.length = a;
    this.width = b;
    this.perimetro = 2 * (a + b);
    this.area = a * b;

    return `O comprimento é ${this.length}, a largura é ${this.width}, o perimetro é ${this.perimetro}, a aréa é ${this.area}`
}

console.log(Retangulo(4,5));        