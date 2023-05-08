/* No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu suprimento de comida disponível todos os dias. Escreva um algoritmo que leia a capacidade inicial de suprimento de comida (em Kg), e calcule quantos dias passarão antes que Blobs coma todo esse suprimento até restar um quilo ou menos. */

let lines = ["3", "40.0", "200.0", "300.0"];

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    let food = parseFloat(lines.shift());
    let days = 0;
    while (food > 1) {
        food /= 2;
        days++;
    }
    console.log(`${days} dias`);
}