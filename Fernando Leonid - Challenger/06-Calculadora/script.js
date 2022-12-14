const resposta = document.querySelector(".resposta");

const numeros = document.querySelectorAll("[id*=tecla]");
const display = document.querySelector("#display");

//chamando a funcao inserir numero para cada numero clickado
const inserirNumero = (evento) => {
    display.textContent = evento.target.textContent;
}

//criando o evento para cada numero
numeros.forEach(numero => {
    numero.addEventListener("click", inserirNumero)
})