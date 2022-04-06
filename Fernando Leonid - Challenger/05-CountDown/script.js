const cadastre = document.querySelector("#btn");

const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

//definindo o dia, hora , minutos e segundos do dia do evento
let diaEvent = 5;
let horasEvent = 12;
let minutosEvent = 30;
let segundosEvent = 0;
//definindo o dia, hora, minutos e segundos atuais
let data = new Date();
let dia = String(data.getDate()).padStart(2 , '0');
let horass = data.getHours();
let minutoss = data.getMinutes();
let segundoss = data.getSeconds();
//fazendo a conta de quanto tempo falta
let faltadia = diaEvent - dia;
let faltahora = horasEvent - horass;
let faltaminutos = minutosEvent - minutoss
let faltaminutoss = (minutoss + faltaminutos) + (60 - minutoss);
let faltasegundos = segundosEvent - segundoss;

if(faltaminutoss > 60){
    faltahora = faltahora + 1
    faltaminutoss = faltaminutoss - 60
}

function calcular(){
    dias.textContent = faltadia;
    horas.textContent = faltahora - 1;
    minutos.textContent = faltaminutoss
    segundos.textContent = (60 + faltasegundos)
}

addEventListener("load", calcular())


setTimeout(function() {
    window.location.reload(1);
  }, 2000);