const bvermelho = document.querySelector("#Vermelho");
const bverde = document.querySelector("#Verde");
const bamarelo = document.querySelector("#Amarelo");
const bautomatico = document.querySelector("#Automático");

const semaforo = document.querySelector("#semaforo")

bvermelho.addEventListener("click", () => {
    semaforo.src = "./img/vermelho.png"
});

bamarelo.addEventListener("click", () => {
    semaforo.src = "./img/amarelo.png"
});

bverde.addEventListener("click", () => {
    semaforo.src = "./img/verde.png"
});

function vermelho(){
    semaforo.src = "./img/vermelho.png"
}

function amarelo(){
    semaforo.src = "./img/amarelo.png"
}

function verde(){
    semaforo.src = "./img/verde.png"
}

function automatico(){
    setTimeout(verde, 1000*2.3); //10 segundos  //2 segundos
    setTimeout(amarelo, 1000*3.3); //20 segundos //4segundos 
    setTimeout(vermelho, 1000*4.3); //30 segundos //6segundos
}

function turnOn(){
    setInterval(automatico, 1000*3); //fazer isso por 10 segundos
}

bautomatico.addEventListener("click", turnOn)