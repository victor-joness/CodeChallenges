/* 

Dado um tempo em-hora AM/PM formato , converta-o para o horário militar (24 horas).

Nota: - 00:00:00 em um relógio de 12 horas é 00:00:00 em um relógio de 24 horas.
- 12:00:00 PM em um relógio de 12 horas é 12:00:00 em um relógio de 24 horas.

Exemplo


Retorne '12:01:00'.


Retorna '00:01:00'.

Descrição da função

Complete a função timeConversion no editor abaixo. Ele deve retornar uma nova string representando a hora de entrada no formato de 24 horas.

timeConversion tem os seguintes parâmetros:

string s : um tempo emformato de hora
Devoluções

string : o tempo emformato de hora
Formato de entrada

Uma única cordaque representa um tempo emformato de relógio -hora (ou seja:ou).

Restrições

Todos os tempos de entrada são válidos
Entrada de amostra

07:05:45PM
Saída de Amostra

19:05:45
*/

//retorne string e aceita string como parametro, PM = pos meio dia , AM = antes do meio dia;

//claramente fora de forma, tem formas melhores de fazer isso, pra entender o codigo tem que usar o quokka, pois eu fico verificando a logica a cada isntrução;
function timeConversion(s) {
  let timer = s.toUpperCase().split("");
  let tamanho = timer.length;
  let formatorAMPM = timer[tamanho - 2] + timer[tamanho - 1];

  let resultado = timer.splice(0, tamanho - 2).join("");

  let Array = resultado.split("");
  let restoDaString = Array.splice(2, tamanho - 2).join("");

  if (formatorAMPM == "AM") {
    let resultadoNumber = parseInt(resultado);
    if (resultadoNumber >= 12) {
      let parcial = resultadoNumber - 12;
      return "0" + parcial + restoDaString;
    } else {
      return resultado;
    }
  } else {
    let resultadoNumber = parseInt(resultado);
    if (resultadoNumber >= 12) {
      return resultado;
    } else {
      let parcial = parseInt(resultado) + 12;
      //ex do quokka
      //teste
      //ai me retorna oque o teste me tras;
      if (parcial == 24) {
        parcial = "00";
        return parcial + restoDaString;
      } else {
        return parcial.toString() + restoDaString;
      }
    }
  }
}

console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("12:45:54PM"));

//umas das formas que achei na internet

function processData(input) {
  input = input.split(":");
  var hours = parseInt(input[0]);
  var timeFrame = input[2].slice(2);
  var seconds = input[2].slice(0, 2);
  if (timeFrame === "PM" && hours !== 12) {
    hours += 12;
  }
  if (hours === 12 && timeFrame === "AM") {
    hours = "00";
  } else if (hours < 10) {
    hours = "0" + hours.toString();
  } else {
    hours = hours.toString();
  }
  console.log([hours, input[1], seconds].join(":"));
}

//fazendo a comparação eu separei os minutos + os segundos e depois trabalhei com a hora separado tanto pro pm quanto pro am,
//aqui ele ja faz a divisao diretamenta, sem precisar da variavel tamanho pois, ele usou o : no split , algo que por falta de pratica eu n sabia que podia usar
//ai com isso ele ja separou os 3 (hora, minuto e segundo), e começou a trabalhar apenas com as horas, que era o importante.
