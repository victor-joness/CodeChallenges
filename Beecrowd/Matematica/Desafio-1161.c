/* 
Leia dois valores inteiros M e N indefinidamente. A cada leitura, calcule e escreva a soma dos fatoriais de cada um dos valores lidos. Utilize uma variável apropriada, pois cálculo pode resultar em um valor com mais de 15 dígitos.
*/

#include <stdio.h>
 
int main() {

    long long int m, n, i, j, fatm, fatn;

    while(scanf("%lld %lld", &m, &n) != EOF){
        fatm = 1;
        fatn = 1;
        for(i = m; i > 0; i--){
            fatm *= i;
        }
        for(j = n; j > 0; j--){
            fatn *= j;
        }
        printf("%lld\n", fatm + fatn);
    }
 
    return 0;
}