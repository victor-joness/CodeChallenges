/* 
Você tem em mãos dois cabos circulares de energia. O primeiro cabo tem raio R1 e o segundo raio R2. Você precisa comprar um conduite circular (veja a imagem abaixo que ilustra um conduite) de maneira a passar os dois cabos por dentro dele:
*/

    let lines = ["3", "1 1", "2 8", "8 2"];

    const n = parseInt(lines.shift());

    for (let i = 0; i < n; i++) {
        let [r1, r2] = lines.shift().split(" ");
        let soma = parseInt(r1) + parseInt(r2);
        console.log(soma);
    }