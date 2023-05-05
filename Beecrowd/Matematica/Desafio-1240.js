/* 
Paulinho tem em suas mãos um pequeno problema. A professora lhe pediu que ele construísse um programa para verificar, à partir de dois valores inteiros A e B, se B corresponde aos últimos dígitos de A.
*/

let lines = ["4", "5678690 78690", "5434554 543", "1243 1243", "54 654"];

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    const [a, b] = lines.shift().split(" ");
    const aLen = a.length;
    const bLen = b.length;
    const aSub = aLen - bLen;
    const aSubStr = a.substr(aSub, aLen);
    if (aSubStr == b) {
        console.log("encaixa");
    } else {
        console.log("nao encaixa");
    }
}