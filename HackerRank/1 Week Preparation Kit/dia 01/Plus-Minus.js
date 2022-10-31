let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positivo = 0;
    let zero = 0;
    let negativo = 0;
    let tamanho = arr.length;
    for(let i = 0; i < tamanho; i++){
        if(arr[i] > 0){
            positivo++
        }else if(arr[i] < 0){
            negativo++
        }else{
            zero++
        }
    }

    console.log((positivo / tamanho).toPrecision(6));
    console.log((negativo / tamanho).toPrecision(6));
    console.log((zero / tamanho).toPrecision(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

console.log(plusMinus([1,1,0,-1,-1]));
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
