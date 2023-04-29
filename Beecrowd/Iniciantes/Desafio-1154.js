/* 

*/

let lines = ["34", "56", "44", "23", "-2"];
let media = 0;
let soma = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] < 0) {
    media = soma / i;
    console.log(media.toFixed(2));
    return 0;
  } else {
    soma = soma + parseInt(lines[i]);
  }
}