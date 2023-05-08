/* 
Os dados armazenados no computador estão em binário. Uma forma econômica de ver estes números é usar a base 16 (hexadecimal).

Sua tarefa consiste em escrever um programa que, dado um número natural na base 10, mostre sua representação em hexadecimal.
 */

#include <stdio.h>

int main(){
    int num;
    int i = 0;
    char hex[100];

    scanf("%d", &num);

    while(num != 0){
        int temp = 0;
        temp = num % 16;

        if(temp < 10){
            hex[i] = temp + 48;
            i++;
        }else{
            hex[i] = temp + 55;
            i++;
        }

        num = num / 16;
    }

    for(int j = i - 1; j >= 0; j--){
        printf("%c", hex[j]);
    }
    printf("\n");

    return 0;

}