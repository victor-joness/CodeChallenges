/* 
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
*/

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */
var lines = [11 ,23 ,10 ,]; /* input.split('\n').map(item => parseInt(item)); */

/* let horas = lines[2] - lines[0];
let minutos = lines[3] - lines[1];

let duracao = (horas * 60) + minutos;

if(duracao <= 0) {
    duracao += 24 * 60;
    console.log(`O JOGO DUROU ${(duracao / 60).toFixed(0)} HORA(S) E ${duracao % 60} MINUTO(S)`);
}else{
    console.log(`O JOGO DUROU ${(duracao / 60).toFixed(0)} HORA(S) E ${duracao % 60} MINUTO(S)`);
} */

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8'); */

const [horaInicial, minInicial, horaFinal, minFinal] = [11,23,10,24]/* input.split(' ').map(item => parseInt(item)) */

var hora = (24 - horaInicial) + horaFinal

var minuto = (60 - minInicial) + minFinal

if(hora > 24 ){

hora = hora - 24 
}

if(minInicial > minFinal){

hora = hora - 1
}

if(hora === 24 && minuto > 0 && minInicial != minFinal){

hora = 0
}

if(minuto >= 60){

minuto = minuto - 60
}

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);