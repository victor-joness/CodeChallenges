/* 
A antiga raça de Gulamatu é muito avançada no seu esquema de cálculo dos anos. Eles entendem o que é ano bissexto (ano que é divisível por 4 e não é divisível por 100, com a ressalva de que ano que são divisíveis por 400 são também anos bissextos.), E têm também alguns anos que ocorrem alguns festivais. Um deles é o festival Huluculu (acontece em anos divisíveis por 15) e o festival Bulukulu (acontece em anos divisíveis por 55 desde que também seja um ano bissexto). Dado um ano você terá de indicar quais propriedades este ano tem. Se o ano não é ano bissexto e nem ano de festival imprima a linha 'This is an ordinary year.', ou seja, que é um ano comum. A ordem de impressão das propriedades dos anos (se presente) é leap year -> huluculu -> bulukulu.
*/

#include <stdio.h>

int main()
{
    int ano;
    int bissexto = 0;
    int huluculu = 0;
    int bulukulu = 0;

    scanf("%d", &ano);

    if(ano % 4 == 0 && ano % 100 != 0){
        bissexto = 1;
    }else if(ano % 400 == 0){
        bissexto = 1;
    }

    if(ano % 15 == 0){
        huluculu = 1;
    }

    if(ano % 55 == 0 && bissexto == 1){
        bulukulu = 1;
    }

    if(bissexto == 1){
        printf("This is leap year.\n");
    }

    if(huluculu == 1){
        printf("This is huluculu festival year.\n");
    }

    if(bulukulu == 1){
        printf("This is bulukulu festival year.\n");
    }

    if(bissexto == 0 && huluculu == 0 && bulukulu == 0){
        printf("This is an ordinary year.\n");
    }

    return 0;
}

