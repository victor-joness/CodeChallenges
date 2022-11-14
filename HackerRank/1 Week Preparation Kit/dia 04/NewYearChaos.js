//aceita array de inteiros como paramentro.

/*
É dia de Ano Novo e as pessoas estão na fila para a montanha-russa do País das Maravilhas. Cada pessoa usa um adesivo indicando sua posição inicial na fila depara. Qualquer pessoa pode subornar a pessoa diretamente na frente dela para trocar de posição, mas ela ainda usa seu adesivo original. Uma pessoa pode subornar no máximo duas outras .

Determine o número mínimo de subornos que ocorreram para chegar a um determinado pedido de fila. Imprima o número de subornos ou, se alguém subornou mais de duas pessoas, imprima Too chaotic.
*/
function minimumBribes(q) {
    // Write your code here
    let tamanho = q.length;
    //let ordem = q.sort();
    let contador = 0;
    //console.log(tamanho)

    let media = (60 * tamanho / 100).toFixed();

    let diferenca = 0;

    for(let i = 0; i < tamanho; i++){
        //console.log(q[i])
        
        if(q[i] == i + 1){
            contador++;
        }else{
            if(q[i] > i + 1){
                diferenca = diferenca + (q[i] - (i + 1));
            }
        }
    }

    //console.log(media)

    if(diferenca > media){
        if(diferenca >= 3){
            console.log("Too chaotic");
            return "Too chaotic";
        }
    }else{
        if(contador != tamanho){
            console.log(diferenca)
            return diferenca;
        }
    }
}

//console.log(minimumBribes([1,2,3,5,4,6,7,8]));
//console.log(minimumBribes([4,1,2,3]));
//console.log(minimumBribes([2,1,5,3,4]));
//console.log(minimumBribes([2,5,1,3,4]));
//console.log(minimumBribes([1,2,5,3,4,7,8,6]));
console.log(minimumBribes([1,2,5,3,7,8,6,4]));

//conseguir fazer perfeitamente a questao.

//abaixo a resposta oficial

function minimumBribes(q) {

    let chaotic = false;
    let bribes = 0;
  
    for (let i = 0; i < q.length; i++) {
      if (q[i] - (i+1) > 2) chaotic = true;
      for (let j = Math.max(0, q[i]-2); j < i; j++) {
        if (q[j] > q[i]) bribes++;
      }
    }
    chaotic === true ?
      console.log('Too chaotic') :
      console.log(bribes);
  }


