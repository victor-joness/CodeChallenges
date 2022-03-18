/* Dada uma fita de DNA, retorne seu complemento de RNA (por transcrição de RNA).

As fitas de DNA e RNA são uma sequência de nucleotídeos.

Os quatro nucleotídeos encontrados no DNA são adenina ( A ), citosina ( C ), guanina ( G ) e timina ( T ).

Os quatro nucleotídeos encontrados no RNA são adenina ( A ), citosina ( C ), guanina ( G ) e uracila ( U ).

Dada uma fita de DNA, sua fita de RNA transcrita é formada pela substituição de cada nucleotídeo por seu complemento:

G->C
C->G
T->A
A->U
*/

export function toRna(dna: string): string{
    let resultado = "";
    for(let i = 0; i< dna.length; i++){
        if(dna[i] == "G"){
            resultado = resultado + "C"
        }else if(dna[i] == "C"){
            resultado = resultado + "G"
        }else if(dna[i] == "T"){
            resultado = resultado + "A"
        }else if(dna[i] == "A"){
            resultado = resultado + "U"
        }else{
            throw new Error('Invalid input DNA.')
        }
    }

    return resultado
}

console.log(toRna("C"))
  