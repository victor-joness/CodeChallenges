/* 
Traduzir sequências de RNA em proteínas.

O RNA pode ser dividido em três sequências de nucleotídeos chamadas códons e depois traduzido para um polipeptídeo da seguinte forma:

RNA: "AUGUUUUCU"=> traduz para

Codões: "AUG", "UUU", "UCU" => que se tornam um polipéptido com a seguinte sequência =>

Proteína:"Methionine", "Phenylalanine", "Serine"

Existem 64 códons que por sua vez correspondem a 20 aminoácidos; entretanto, todas as sequências de códons e aminoácidos resultantes não são importantes neste exercício. Se funcionar para um códon, o programa deve funcionar para todos eles. No entanto, sinta-se à vontade para expandir a lista no conjunto de testes para incluir todos eles.

Existem também três códons de terminação (também conhecidos como códons 'STOP'); se algum desses códons for encontrado (pelo ribossomo), toda a tradução termina e a proteína é terminada.

Todos os códons subsequentes são ignorados, assim:

RNA: "AUGUUUUCUUAAAUG"=>

Codões: "AUG", "UUU", "UCU", "UAA", "AUG"=>

Proteína:"Methionine", "Phenylalanine", "Serine"

Observe que o códon de parada "UAA"termina a tradução e a metionina final não é traduzida na sequência da proteína.

Abaixo estão os códons e aminoácidos resultantes necessários para o exercício.

Códon	Proteína
AGO	Metionina
UUU, UUC	Fenilalanina
UAU, UUG	Leucina
UCU, UCC, UCA, UCG	Serina
UAU, UAC	Tirosina
UGU, UGC	Cisteína
UGG	Triptofano
UAA, UAG, UGA	PARE
*/

export function translate(string:string){
    let parcial = "";
    let array = [];
    let contador = 0;
    let resultado = [];

    for(let i = 0; i < string.length; i++){
        if(contador < 2){
            if(string[i] == undefined){
                contador++;
            }else{
                parcial = parcial + string[i];
                contador++;
            }
        }else{
            parcial = parcial + string[i];
            array.push(parcial);
            parcial = ""
            contador = 0;
        }
    }

    array
    
    for(let i = 0; i < array.length; i++){
        if(array[i] == "UAA" || array[i] == "UAG" || array[i] == "UGA"){
            return resultado
        }
        switch(array[i]){
            case "AUG":{
                resultado.push("Methionine");
                break;
            }
            case "UUU":{
                resultado.push("Phenylalanine");
                break;
            }
            case "UUC":{
                resultado.push("Phenylalanine");
                break;
            }
            case "UUA":{
                resultado.push("Leucine");
                break;
            }
            case "UUG":{
                resultado.push("Leucine");
                break;
            }
            case "UCU":{
                resultado.push("Serine");
                break;
            }
            case "UCC":{
                resultado.push("Serine");
                break;
            }
            case "UCA":{
                resultado.push("Serine");
                break;
            }
            case "UCG":{
                resultado.push("Serine");
                break;
            }
            case "UAU":{
                resultado.push("Tyrosine");
                break;
            }
            case "UAC":{
                resultado.push("Tyrosine");
                break;
            }
            case "UGU":{
                resultado.push("Cysteine");
                break;
            }
            case "UGC":{
                resultado.push("Cysteine");
                break;
            }
            case "UGG":{
                resultado.push("Tryptophan");
                break;
            }
        } 
    }

    return resultado;
}
  
console.log(translate("UGU"));
console.log(translate('UGGUGUUAUUAAUGGUUU'))
console.log(translate("AUGUUUUAA"));