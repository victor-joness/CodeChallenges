/* 
A Federação Gaúcha de Futebol contratou você para escrever um programa para fazer uma estatística do resultado de vários GRENAIS. Escreva um programa para ler o número de gols marcados pelo Inter e pelo Grêmio em um GRENAL. Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma resposta. Se a resposta for 1, o algoritmo deve ser executado novamente solicitando o número de gols marcados pelos times em uma nova partida, caso contrário deve ser encerrado imprimindo:

- Quantos GRENAIS fizeram parte da estatística.
- O número de vitórias do Inter.
- O número de vitórias do Grêmio.
- O número de Empates.
- Uma mensagem indicando qual o time que venceu o maior número de GRENAIS (ou "Nao houve vencedor", caso termine empatado).
*/

let lines = ["3 2", "1", "2 3", "1", "3 1", "2"];

let inter = 0;
let gremio = 0;
let empate = 0;
let jogos = 0;

for(let i = 0; i < lines.length; i++){
    let [x, y] = lines[i].split(" ").map((item) => parseInt(item));
    
    if(x && y){
        jogos++;
        if(x > y){
            inter++;
        }else if(y > x){
            gremio++;
        }else{
            empate++;
        }
        console.log(`Novo grenal (1-sim 2-nao)`);
    }

    if(x == 2 && !y){
        console.log(`${jogos} grenais`);
        console.log(`Inter:${inter}`);
        console.log(`Gremio:${gremio}`);
        console.log(`Empates:${empate}`);
        if(inter > gremio){
            console.log(`Inter venceu mais`);
        }else if(gremio > inter){
            console.log(`Gremio venceu mais`);
        }else{
            console.log(`Nao houve vencedor`);
        }
        return 0;
    }
}

