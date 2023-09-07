var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = lines.shift();
let numeroString = numero.toString();

const valoresf = (numero) => {
  let numeroString = numero.toString();
  let antes = parseInt(
    numero
      .toString()
      .split("")
      .splice(0, numeroString.length - 1)
      .join("")
  );
  let ultimo = parseInt(numero.toString().split("").slice(-1));
  return [antes, ultimo];
};

for(let i = 0; numero >= 0; i++){
    console.log(numero);
    let valores = valoresf(numero);
    let prox = valores[0] * 3 + valores[1];
    numero = prox;
}