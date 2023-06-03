/* 
Uma empresa quer mandar um envelope para obter uma resposta de um cliente e quer saber se é possível colocar esse envelope dentro de outro. Ambos envelopes são retangulares e um só pode ser colocado dentro do outro se as dimensões forem ambas menores. Dadas as dimensões dos dois envelopes, responda se é possível ou não colocar o primeiro dentro do segundo.
 */

let lines = ["3", "10 10 10 20", "19 2 3 20", "2 20 5 15"];

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    let [a, b, c, d] = lines[i].split(" ").map((item) => parseInt(item));

    if (a < b) {
        let aux = a;
        a = b;
        b = aux;
    }

    if (c < d) {
        let aux = c;
        c = d;
        d = aux;
    }

    if (a < c && b < d) {
        console.log("S");
    } else {
        console.log("N");
    }
}