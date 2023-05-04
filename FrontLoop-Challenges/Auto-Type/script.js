const spanContainer = window.document.querySelector(".span");

const palavras = ["design", "frontend", "backend", "testing"];

const tempoParaEscrever = 400;
const tempoDeEspera = 2000;
const tempoParaDeletar = 200;

let isDeleting = false;
let textToWrite = "";
let index = 0;
let typeSpeed = tempoParaEscrever;

const type = () => {
    console.log("teste")

  const textAtual = palavras[index];

  if (isDeleting) {
    [
      (textToWrite = textAtual.substring(0, textToWrite.length - 1)),
      (typeSpeed = tempoParaDeletar),
    ];
  } else {
    textToWrite = textAtual.substring(0, textToWrite.length + 1);
  }

  spanContainer.innerText = textToWrite;

  if (!isDeleting && textToWrite === textAtual)
    [(typeSpeed = tempoDeEspera), (isDeleting = true)];
  else if (isDeleting && textToWrite === "")
    [
      (typeSpeed = tempoParaDeletar),
      (isDeleting = false),
      (index = index + 1 >= palavras.length ? 0 : index + 1),
    ];

  setTimeout(() => type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", type);
