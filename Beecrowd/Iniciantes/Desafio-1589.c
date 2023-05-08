/* 
Você tem em mãos dois cabos circulares de energia. O primeiro cabo tem raio R1 e o segundo raio R2. Você precisa comprar um conduite circular (veja a imagem abaixo que ilustra um conduite) de maneira a passar os dois cabos por dentro dele:
*/

#include <stdio.h>

int main() {

    int n;
    int r1, r2;

    scanf("%d", &n);

    for(int i = 0; i < n; i++){
        scanf("%d %d", &r1, &r2);
        printf("%d\n", r1 + r2);
    }

    return 0;
}