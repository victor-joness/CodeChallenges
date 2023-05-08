/* 
Após uma aula muito boa de história - sucedendo uma aula muito ruim de matemática - alguns alunos de uma determinada escola estão com dúvidas em um simples problema. A professora pediu que eles informassem o valor numérico (por simplicidade deve ser em decimal e em algarismos arábicos) do século de um determinado ano, mas como poucos alunos estavam acertando ela decidiu pedir sua ajuda para criar um programa que fizesse exatamente isso a fins educativos.

Para quem não se lembra desta aula de história, o século 1, por exemplo, compreende os anos entre 1 e 100, o século 2 os anos entre 101 e 200, o século 3 os anos entre 201 e 300 e assim por diante.  
 */

#include <stdio.h>

int main()
{
    int ano;
    int seculo;

    while(scanf("%d", &ano) != EOF){
        seculo = 0;

        if(ano == 0){
            break;
        }

        if(ano % 100 == 0){
            seculo = ano / 100;
        }else{
            seculo = (ano / 100) + 1;
        }

        printf("%d\n", seculo);
    }    
    return 0;
}