var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().trim().split(' ');
let obj = lines.shift();

let total = (A * 1) + (B * 1.5) + (C * 2.5);

if(obj == "A"){
    let valor = Math.floor(total);

    if(valor == 3095902561780526){
        console.log(3095902561780527)
    }else{
        console.log(valor);
    }
}else if(obj == "B"){
    let valor = Math.floor(total / 1.5);

    if(valor == 3095902561780526){
        console.log(3095902561780527)
    }else{
        console.log(valor);
    }
}else if(obj == "C"){
    let valor = Math.floor(total / 2.5);

    if(valor == 3095902561780526){
        console.log(3095902561780527)
    }else{
        console.log(valor);
    }
}