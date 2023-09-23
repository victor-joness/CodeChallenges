var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let quantidade = lines.shift().trim();
let resultado = [];

for (let i = 0; i < quantidade; i++) {
    let linha = lines.shift().trim().split(' ');

    linha = linha.map((item) => item[0]);

    if(linha.length > 0){
        linha = linha.filter((item) => item != '');
    }

    resultado.push(linha.join(''));
}

for(let i = 0; i < quantidade; i++){
    console.log(resultado[i]);
}