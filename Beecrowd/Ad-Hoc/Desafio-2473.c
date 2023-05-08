/* 
Flavinho sabe que a chance de ganhar na loteria é bem pequena. Ele gosta muito de estudar probabilidade! Mas, justamente por entender de probabilidades, Flavinho segue o ditado, “quem não arrisca, não petisca!”, e faz um jogo toda semana.

Na loteria preferida dele, o jogador aposta seis números entre 1 e 99. No sorteio, também são escolhidos seis números ganhadores entre 1 e 99. Quem acerta 3, 4, 5 ou 6 números ganha como prêmio, respectivamente, um “terno”, uma “quadra”, uma “quina” ou uma “sena”.

Nesta tarefa, você deve escrever um programa que diga qual foi o prêmio que Flavinho ganhou, dados os seis números que ele apostou e os seis números que foram sorteados.
 */

#include <stdio.h>

int main()
{
    int aposta[6];
    int sorteio[6];
    int acertos = 0;

    for(int i = 0; i < 6; i++){
        scanf("%d", &aposta[i]);
    }

    for(int i = 0; i < 6; i++){
        scanf("%d", &sorteio[i]);
    }

    for(int i = 0; i < 6; i++){
        for(int j = 0; j < 6; j++){
            if(aposta[i] == sorteio[j]){
                acertos++;
            }
        }
    }

    if(acertos == 3){
        printf("terno\n");
    }else if(acertos == 4){
        printf("quadra\n");
    }else if(acertos == 5){
        printf("quina\n");
    }else if(acertos == 6){
        printf("sena\n");
    }else{
        printf("azar\n");
    }

    return 0;
}