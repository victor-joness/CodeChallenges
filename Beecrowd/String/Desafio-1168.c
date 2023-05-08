/* 
João quer montar um painel de leds contendo diversos números. Ele não possui muitos leds, e não tem certeza se conseguirá montar o número desejado. Considerando a configuração dos leds dos números abaixo, faça um algoritmo que ajude João a descobrir a quantidade de leds necessário para montar o valor.

Obs.: Para programadores de Javascript, recomenda-se o uso de "input.trim().split('\n')" para evitar erros conhecidos.
 */

#include <stdio.h>

int main() {

    int n, i, j, leds;
    char num[100];

    scanf("%d", &n);

    for(i = 0; i < n; i++){
        scanf("%s", num);
        leds = 0;
        for(j = 0; num[j] != '\0'; j++){
            if(num[j] == '1'){
                leds += 2;
            }else if(num[j] == '2' || num[j] == '3' || num[j] == '5'){
                leds += 5;
            }else if(num[j] == '4'){
                leds += 4;
            }else if(num[j] == '6' || num[j] == '9' || num[j] == '0'){
                leds += 6;
            }else if(num[j] == '7'){
                leds += 3;
            }else if(num[j] == '8'){
                leds += 7;
            }
        }
        printf("%d leds\n", leds);
    }

    return 0;
}