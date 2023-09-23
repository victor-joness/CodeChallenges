/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); */

let lines = [
  "4",

  "1 x 1",
  "2 x 1",
  "2 x 0",
  "2 x 1",
  "1 x 1",
  "2 x 2",
  "3 x 1",
  "3 x 1",
];

let quantidade = lines.shift();

for (let i = 0; i < quantidade; i++) {
  let [m1, x1, v1] = lines.shift().split(" ").map((item) => parseInt(item));
  let [m2, x2, v2] = lines.shift().split(" ").map((item) => parseInt(item));

  if (m1 + v2 > v1 + m2) {
    console.log("Time 1");
  } else if (m1 + v2 == v1 + m2) {
    if (v2 > v1) {
      console.log("Time 1");
    } else if (v2 < v1) {
      console.log("Time 2");
    } else {
      console.log("Penaltis");
    }
  } else {
    console.log("Time 2");
  }
}
