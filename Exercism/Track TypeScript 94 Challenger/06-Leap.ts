/* Dado um ano, informe se é um ano bissexto.

O complicado aqui é que ocorre um ano bissexto no calendário gregoriano:

Para determinar se um ano é bissexto, execute estas etapas:

Se o ano for uniformemente divisível por 4, vá para a etapa 2. Caso contrário, vá para a etapa 5.
Se o ano for uniformemente divisível por 100, vá para a etapa 3. Caso contrário, vá para a etapa 4.
Se o ano for uniformemente divisível por 400, vá para a etapa 4. Caso contrário, vá para a etapa 5.
O ano é bissexto (tem 366 dias).
O ano não é um ano bissexto (tem 365 dias).

Por exemplo, 1997 não é um ano bissexto, mas 1996 é. 1900 não é um ano bissexto, mas 2000 é.

ano comum retorna false e bissexto true
*/

export function isLeap(ano: number){
    if(ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                return true
            }else{
                return false
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
}

console.log(isLeap(2015))