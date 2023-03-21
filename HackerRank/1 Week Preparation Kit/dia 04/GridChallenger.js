//returnar string e receber como parametro array de strings.

function gridChallenge(grid) {
    // Write your code here
    let contador3 = 0;
    let tamanhoGRID = grid.length;

    /*
    if(tamanhoGRID == 5{
    for(let i = 0; i < tamanhoGRID; i++){
        let temp = grid[i].split("").sort();
        grid[i] = temp.join("");   
    }

    return "YES"
    }
    */
    
    for(let i = 0; i < tamanhoGRID; i++){
        let arrayAux = grid[i].split("");
        let tamanhoAUX = arrayAux.length;
        let j = 0;
        let contador = 0;
        let contador2 = 0;
        
        console.log(grid[0].split(""))
        for(let i = 0; i < tamanhoAUX; i++){
            if(j < tamanhoAUX - 1){
                j++;
            }
            if(arrayAux[i].charCodeAt() > arrayAux[j].charCodeAt()){
                contador2++;
            }else{
                contador++;
            }
        }

        if(contador == tamanhoAUX){
            contador3++;
        }
    }

    

    if(contador3 == tamanhoGRID){
        return "YES";
    }else{
        return "NO";
    }
}



console.log("l".charCodeAt())
//console.log("a".charCodeAt());
console.log(gridChallenge(["abc", "ade", "efg"])); //tem que ser yess
console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])); //tem que ser yes

console.log(gridChallenge(["abc", "lmp", "qrt"])) //tem q ser yes
console.log(gridChallenge(["mpxz", "abcd", "wlmf"])) //tem q ser no
console.log(gridChallenge(["abc", "hjk", "mpq", "rtv"])) //tem q ser yes

//acertei todos os teste informados antes do submit, porem essa não é a maneira correta de resolver,
//por isso dar varios teste case errados.
//abaixo segue a forma correta.


function gridChallenge2(grid) {
    let n = grid.length;
    for (let i = 0; i < n; ++i) {
      let temp = grid[i].split("").sort();
      grid[i] = temp;
    }
    let answer = "YES";
    for (let i = 0; i < n; ++i) {
      let temp = [];
      for (let j = 0; j < n; ++j) {
        temp.push(grid[j][i]);
      }
      let temp1 = temp.join("");
      let temp2 = temp.sort().join("");
      if (temp1 !== temp2) {
        answer = "NO";
        break;
      }
    }
    return answer;
  }