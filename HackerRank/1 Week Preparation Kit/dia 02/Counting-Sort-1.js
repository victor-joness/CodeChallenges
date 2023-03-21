//deu certo, para os testes iniciais, porem quando o vetor ficar muito grande(que é um dos teste com 10000000) ele fica muito lento pelo exceso de for, e ai
//o desafio tem um ,limite de tempo;
function countingSort(arr) {
    //tamanho do arr
    let n = arr.length;

    let resultado = [];
    let teste = [];

    for(let i = 0; i < n; i++){
        let aux = 0;
        for(let j = 0; j < n; j++){
            if(arr[i] == arr[j]){
                aux++;
            }
        }
        resultado[arr[i]] = aux;
    }

    for(let i = 0; i < n; i ++){
        if(resultado[i] == null){
            resultado[i] = 0;
        }
    }

    return resultado;
}

countingSort([63, 25 ,73 , 1 , 98 , 73 , 56 , 84 , 86 , 57 , 16 , 83 , 8 , 25 , 81 , 56 , 9 , 53 , 98 , 67 , 99 , 12 , 83 , 89 , 80 , 91 , 39 , 86 , 76 , 85 , 74 , 39 , 25 , 90 , 59 , 10 , 94 , 32 , 44 , 3 , 89 , 30 , 27 , 79 , 46 , 96 , 27 , 32 , 18 , 21 , 92 , 69 , 81 , 40 , 40 , 34 ,68 , 78 , 24 , 87 , 42 , 69 , 23 , 41 , 78 , 22 , 6 , 90 , 99 , 89 , 50 , 30 , 20 , 1 , 43 , 3 , 70 , 95 , 33 , 46 , 44 , 9 , 69 , 48 , 33 , 60 , 65 , 16 , 82 , 67 , 61 , 32 , 21 , 79 , 75 , 75 , 13 , 87 , 70 , 33]);


//resposta correta
function countingSort(arr) {
    let counterArray = Array(100).fill(0);
    
    for (let number of arr) {
        counterArray[number]++
    }
    return counterArray;
}