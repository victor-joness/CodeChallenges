/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    
    // Write your code here
    let arrayOriginal = n.split("");
    let arrayResultante = [];
    let tamanho = n.split("").length;
    let soma = 0;

    for(let i = 0; i < tamanho; i++){
        arrayResultante.push(parseInt(arrayOriginal[i]));
    }

    if(arrayResultante.length === 1){
        return arrayResultante[0];
    }

    for(let i = 0; i < tamanho; i++){
        soma = soma + arrayResultante[i];
    }

    return superDigit((soma * k).toString(), 1);
}


// superDigit(soma.toString(), soma.toString().length);

//console.log(superDigit("9875", 4));
//console.log(superDigit("29", 2));
//console.log(superDigit("11", 2));
//console.log(superDigit("9875987598759875", 16));
//console.log(superDigit("148", 3));
console.log(superDigit("123", 3));

function superDigit3(n, k) {
    // Write your code here
    const nums = n.split("").map(num => parseInt(num));
    if(nums.length === 1) 
    {
        return nums[0]
    }
    
    const sum = nums.reduce((a,b) => a + b) * k;
    console.log(sum)
    return superDigit(sum.toString(), 1);
}

console.log(superDigit3("123", 3));