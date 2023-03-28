/* 
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
*/

#include <stdio.h>
int main()
{
    int x, a, i;

    int in = 0;
    int out = 0;

    scanf("%d", &x);
    for(i = 0; i < x; i++)
    {
        scanf("%d", &a);
        if(a >= 10 && a <= 20){
            in++;
        }else{
            out++;
        }

    }
    printf("%d in\n", in);
    printf("%d out\n", out);

    return 0;
}