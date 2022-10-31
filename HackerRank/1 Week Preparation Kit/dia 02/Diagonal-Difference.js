//forma que eu consegui
function diagonalDifference(arr) {
    //alocando as linhas
    let matriz = new Array(arr); //quantas linhas

    //alocando as colunas
    for(let i = 0; i < arr; i++){
        matriz[i] = new Array(arr);
    }

    let leftsoma = 0;
    let rightsoma = 0;

    matriz[0][0] = 11;
    matriz[0][1] = 2;
    matriz[0][2] = 4;
    matriz[1][0] = 4;
    matriz[1][1] = 5;
    matriz[1][2] = 6;
    matriz[2][0] = 10;
    matriz[2][1] = 8;
    matriz[2][2] = -12;

    for(let i = 0; i < arr; i++){
        leftsoma = leftsoma + matriz[i][i];
    }

    for(let i = 0, aux = arr - 1; i <= arr - 1; i++, aux--){
        rightsoma = rightsoma + matriz[i][aux];
    }

    return Math.abs(rightsoma - leftsoma);
}

console.log(diagonalDifference(3));

//resposta correta
function diagonalDifference2(arr) {
    const first = arr.reduce((acc, ar, i) => acc + ar[i], 0);
    const second = arr.reduce((acc, ar, i) => acc + ar[ar.length - 1 - i], 0);
    return Math.abs(first - second)
}

console.log(diagonalDifference2(3))
