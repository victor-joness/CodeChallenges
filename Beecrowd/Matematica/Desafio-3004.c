/* 
Uma empresa quer mandar um envelope para obter uma resposta de um cliente e quer saber se é possível colocar esse envelope dentro de outro. Ambos envelopes são retangulares e um só pode ser colocado dentro do outro se as dimensões forem ambas menores. Dadas as dimensões dos dois envelopes, responda se é possível ou não colocar o primeiro dentro do segundo.
 */

#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        int a, b, c, d;
        scanf("%d %d %d %d", &a, &b, &c, &d);

        if (a < b) {
            int aux = a;
            a = b;
            b = aux;
        }

        if (c < d) {
            int aux = c;
            c = d;
            d = aux;
        }

        if (a < c && b < d) {
            printf("S\n");
        } else {
            printf("N\n");
        }
    }

    return 0;
}