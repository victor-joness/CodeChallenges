/* Bob é um adolescente indiferente. Na conversa, suas respostas são muito limitadas.

Bob responde 'Claro'. se você fizer uma pergunta, como "Como você está?". ok

Ele responde 'Uau, relaxe!' se você GRITAR COM ELE (em todas as maiúsculas).  ok

Ele responde 'Calma, eu sei o que estou fazendo!' se você gritar uma pergunta para ele. ok

Ele diz 'Tudo bem. Seja desse jeito!' se você se dirigir a ele sem realmente dizer nada.  

Ele responde 'Tanto faz'. a qualquer outra coisa.

O parceiro de conversação de Bob é um purista quando se trata de comunicação escrita e sempre segue as regras normais em relação à pontuação das frases em inglês.
*/

export function hey(message: string): string {
    let mensage = message.split(" ").join("")

    if(mensage.trim().length == 0){
        return `Fine. Be that way!`
    }

    //regex maiscula
    let maiscula = /[A-Z]|[!]/;
    //regex pergunta
    let pergunta = /[?]$/;
    //regex caractere
    let caractere = /[,]|[0-9]/;
    //regex caractere diferente
    let caracteresdiferente = /[#]|["^"]|[*]|[@]|[$]|[(]|[*]|[%]/;

    //contadores
    let contadorminuscula = 0;
    let contadorpergunta = 0;
    let contadormaisucla = 0;
    let contadorcaractere = 0;
    let contadorcaracteresdiferente = 0;

    for(let i = 0; i< mensage.length; i++){
        if(caracteresdiferente.test(mensage[i]) == true){
            contadorcaracteresdiferente++;
        }
    }

    for(let i = 0; i< mensage.length; i++){
        if(caractere.test(mensage[i]) == true){
            contadorcaractere++;
        }
    }

    for(let i = 0; i< mensage.length; i++){
        if(pergunta.test(mensage[i]) == true && pergunta.test(mensage[mensage.length-1]) == true){
            contadorpergunta++;
        }else{
            if(maiscula.test(mensage[i]) == true){
                contadormaisucla++;
            }else{
                contadorminuscula++;
            }
        }
    }

    if(contadorpergunta > 0 && contadorminuscula > 0){
        return "Sure."
    }else if(contadorpergunta == 0 && contadormaisucla == mensage.length){
        return "Whoa, chill out!"
    }else if(contadorpergunta > 0 && contadormaisucla == mensage.length - 1){
        return "Calm down, I know what I'm doing!"
    }else if(mensage.length - contadorcaractere == contadormaisucla && contadormaisucla > 0){
        return "Whoa, chill out!"
    }else if(contadorcaractere + contadorcaracteresdiferente == contadorminuscula && contadorcaracteresdiferente > 0){
        return "Whoa, chill out!"
    }else{
        return "Whatever."
    }
}

//RESOLUÇÃO OFICIAL

function isYelling(message: string): boolean {
    return message.toUpperCase() === message && message.toLowerCase() !== message
}
  
function isQuestion(message: string): boolean {
    return message.trim().slice(-1) === '?'
}
  
function isSilence(message: string): boolean {
    return message.trim().length === 0
}
  
export function hey2(message: string): string {
    if (isYelling(message) && isQuestion(message)) {
      return "Calm down, I know what I'm doing!"
    }
  
    if (isYelling(message)) {
      return 'Whoa, chill out!'
    }
  
    if (isQuestion(message)) {
      return 'Sure.'
    }
  
    if (isSilence(message)) {
      return 'Fine. Be that way!'
    }
  
    return 'Whatever.'
}