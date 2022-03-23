const resposta = window.document.querySelector(".resposta");
const calcular = document.querySelector("#calcular");

function imc(){
    let nome = document.querySelector(".nome").value;
    let altura = document.querySelector(".altura").value;
    let peso = document.querySelector(".peso").value;


    let imc = (peso / (altura * altura));

    if(nome !== '' && altura !== '' && peso !== ''){
        if(imc < 18.5){
            resposta.textContent = `${nome} Seu imc é de ${imc.toFixed(2).replace(".", ",")} e você está abaixo do peso`
        }else if(imc > 18.5 && imc < 24.9){
            resposta.textContent = `${nome} Seu imc é de ${imc.toFixed(2).replace(".", ",")} e você está com o peso normal`
        }else if(imc > 24.9 && imc < 34.9){
            resposta.textContent = `${nome} Seu imc é de ${imc.toFixed(2).replace(".", ",")} e você está com obesidade Grau 1`
        }else if(imc > 35 && imc < 40){
            resposta.textContent = `${nome} Seu imc é de ${imc.toFixed(2).replace(".", ",")} e você está com obesidade Grau 2`
        }else if(imc > 40){
            resposta.textContent = `${nome} Seu imc é de ${imc.toFixed(2).replace(".", ",")} e você está com obesidade Grau 3`
        }
    }else{
        resposta.textContent = "Confira os dados inseridos"
    }

}

calcular.addEventListener('click', imc); 