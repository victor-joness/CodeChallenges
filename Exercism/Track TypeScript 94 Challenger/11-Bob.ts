/* Bob é um adolescente indiferente. Na conversa, suas respostas são muito limitadas.

Bob responde 'Claro'. se você fizer uma pergunta, como "Como você está?".

Ele responde 'Uau, relaxe!' se você GRITAR COM ELE (em todas as maiúsculas).

Ele responde 'Calma, eu sei o que estou fazendo!' se você gritar uma pergunta para ele.

Ele diz 'Tudo bem. Seja desse jeito!' se você se dirigir a ele sem realmente dizer nada.

Ele responde 'Tanto faz'. a qualquer outra coisa.

O parceiro de conversação de Bob é um purista quando se trata de comunicação escrita e sempre segue as regras normais em relação à pontuação das frases em inglês.
*/

export function hey(message: string): string {
    if(message.length == 0){
        return `Fine. Be that way!`
    }

    var tudo = /[A-Za-z]/;
    let maiscula = /[A-Z]/;
    let regex = /[?]$/

    let contador = 0;

    for(let i = 0; i< message.length; i++){
        if(regex.test(message[i]) == true){
            return "pergunta"
        }else{
            if(maiscula.test(message[i]) == true){
                console.log("não é pergunta e é tudo maisculo");
            }else{
                console.log("não é pergunta e não é tudo maisuclo")
            }
        }
    }

}
        
console.log(hey("VIc"));