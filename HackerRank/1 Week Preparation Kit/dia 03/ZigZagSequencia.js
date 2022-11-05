function processData(input) {
    let Input;
    if(Array.isArray(input)){
        Input = input
    }else{
        Input = [input];
        return Input;
    }
    //Enter your code here
    let tamanho = Input.length;
    let maior = 0;

    let resultado = [];

    for(let i = 0; i < tamanho; i++){
        if(Input[i] > maior){
            maior = Input[i];
        }
    }
    let meio = ((tamanho/2) - 1).toFixed();

    resultado[meio] = maior;

    console.log(resultado[0])

    let menor = Input[0];

    for(let i = 0; i < tamanho; i++){    
        if(resultado[i] == undefined  && i < meio){
            resultado[i] = Input.sort().shift();
            
            if(resultado[i] < menor){
                menor = resultado[i];
            }
            resultado[0] = menor;
        }else{
            resultado[i] = Input.sort().pop();

        }
    }

    return resultado;
}

//console.log(processData(1))
//console.log(processData(7))
//console.log(processData([1,2,3,4,5,6,7]))
//console.log(processData([34146,262,29353,82374,4494,80162,4294]))