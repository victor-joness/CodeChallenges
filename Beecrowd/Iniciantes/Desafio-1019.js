/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos. */

var segundos = 140153;

var minutos = parseInt(segundos/60);
segundos = segundos - (minutos * 60);
var horas = 0;

if(minutos > 60){
    horas = parseInt(minutos/60);
    minutos = minutos - (horas * 60);
}

console.log(`${horas}:${minutos}:${segundos}`);