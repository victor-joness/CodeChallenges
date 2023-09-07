var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = input.split("");

let x = 0;
let o = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] == "X") {
    x++;
  }
}
if (array[0] == "X" && array[1] == "O" && array[2] == "X") {
  console.log("*");
} else if (x < 2 || x == 3 || x == 0) {
  console.log("?");
} else {
  console.log("Alice");
}