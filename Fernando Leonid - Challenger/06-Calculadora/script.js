const resposta = document.querySelector(".resposta");

const numeros = document.querySelectorAll("[id*=tecla]");
const display = document.querySelector("#display");
const operadores = document.querySelectorAll("[id*=operador]");

let NovoNumero = true;
let Operador;
let NumeroAnterior;

//caso tenho um operador, temos uma operação pendente, então ele é diferente de undefined
const operacaoPendente = () => Operador !== undefined;

//funcao que faz os calculos padroes aritmeticos;
const calcular = () => {
    if (operacaoPendente()) {
        const NumeroAtual = parseFloat(display.textContent.replace(",", "."));
        NovoNumero = true;
        if (Operador == "+") {
            atualizarDisplay(NumeroAnterior + NumeroAtual);
        } else if (Operador == "-") {
            atualizarDisplay(NumeroAnterior - NumeroAtual);
        } else if (Operador == "*") {
            atualizarDisplay(NumeroAnterior * NumeroAtual);
        } else if (Operador == "/") {
            atualizarDisplay(NumeroAnterior / NumeroAtual);
        }
    }
};

//fazendo a concatenaçao dos numeros, toLocaleString é pra mostrar virgula ao inves de ponto, pq o js só faz contas com ponto.
const atualizarDisplay = (text) => {
    if (NovoNumero) {
        display.textContent = text.toLocaleString("BR");
        NovoNumero = false;
    } else {
        display.textContent += text.toLocaleString("BR");
    }
};

//chamando a funcao inserirNumero para cada numero clickado
//evento é oq recebemos no caso é o id da div html, então na div pegamos o target e o textContent do target
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

//criando o evento para cada numero
numeros.forEach((numero) => {
    numero.addEventListener("click", inserirNumero);
});

//seleciono o operador que foi clicado, caso ele não seja o novonumero, ou seja, seja o numero depóis do operador, ele chama a funcao calcular.
const SelecionarOperador = (evento) => {
    if (!NovoNumero) {
        calcular();
        NovoNumero = true;
        Operador = evento.target.textContent;
        NumeroAnterior = parseFloat(display.textContent.replace(",", "."));
    }
};

//criando o evento para cada numero
operadores.forEach((operador) => {
    operador.addEventListener("click", SelecionarOperador);
});

//funcao do botão de igual, ele faz o calculo e reset o operador.
const ativarIgual = () => {
    calcular();
    Operador = undefined;
};

document.querySelector("#igual").addEventListener("click", ativarIgual);

//Limpar todo o calculo
const LimparCalculo = () => {
    display.textContent = "";
    NovoNumero = true;
    Operador = undefined;
    NumeroAnterior = undefined;
};

document
    .querySelector("#LimparCalculo")
    .addEventListener("click", LimparCalculo);

//Limpar a tela
const LimparDisplay = () => {
    display.textContent = "";
};

document
    .querySelector("#LimparDisplay")
    .addEventListener("click", LimparDisplay);

//remover um numero da tela
const removerUltimoNumero = () => {
    display.textContent = display.textContent.slice(0, -1);
};

document
    .querySelector("#backspace")
    .addEventListener("click", removerUltimoNumero);

//inverter o sinal do numero que ta no display
const inverterSinal = () => {
    NovoNumero = true;
    atualizarDisplay(display.textContent * -1);
};

document.querySelector("#inverter").addEventListener("click", inverterSinal);


//algumas condições para adicionar virgula ao numero, como por exemplo 1 virgula por numero
const existeVirgula = () => display.textContent.indexOf(",") != -1;

const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
    if (!existeVirgula()) {
        if (existeValor()) {
            atualizarDisplay(",");
        } else {
            atualizarDisplay("0,");
        }
    }
};

document.querySelector("#decimal").addEventListener("click", inserirDecimal);

//fazendo o teclado funcionar.
const mapaTeclado = {
    "0"  : "tecla0",
    "1"  : "tecla1",
    "2"  : "tecla2",
    "3"  : "tecla3",
    "4"  : "tecla4",
    "5"  : "tecla5",
    "6"  : "tecla6",
    "7"  : "tecla7",
    "8"  : "tecla8",
    "9"  : "tecla9",
    "+"  : "operadorAdicionar",
    "-"  : "operadorSubtrair",
    "*"  : "operadorMultiplicar",
    "/"  : "operadorDividir",
    "="  : "igual",
    ","  : "decimal",
    "i"  : "inverter",
    "Escape"  : "LimparCalculo",
    "C"  : "LimparDisplay",
    "Backspace"  : "backspace",
    "Enter"  : "igual",
}

//indexOf tras -1 quando não existe, e a posição quando existe. e só habilitamos as teclas que então presente no object.
const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclasPermitidas = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if(teclasPermitidas()){
        document.getElementById(mapaTeclado[tecla]).click();
    }
};

document.addEventListener("keydown", mapearTeclado)

