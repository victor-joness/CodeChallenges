function flippingMatrix(matrix) {
    let resultado = [];
    
    for(let i = 0; i < matrix.length; i++){

    }

}

//resultado
function flippingMatrix2(matrix) {
    let m = matrix
    let l = matrix.length - 1
    let sm = Math.floor(matrix.length/2)

    let total = 0;
    for (let i = 0; i < sm; i++) {
        for (let j = 0; j < sm; j++) {
            //pega o valor maximo na comparação 4 vezes entre os arrays
            total += Math.max(m[i][j], m[l-i][j], m[i][l-j], m[l-i][l-j])
            
        }
    }
    return total
}
console.log(flippingMatrix2([[1,2], [3,4]])); //4
console.log(flippingMatrix2([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]])); //414
