//um ou mais caracteres, inicio e fim com numero
const cepValidar = (cep) => {
    if(cep.length == 8 && /^[0-9]+$/.test(cep)){
        return true;
    }else{
        window.alert("cep tem 8 digitos e composto apenas por numeros");
        return false;
    }
}

const preencherFormulario = (endereço) => {
    //eu não uso as variaveis então poderia fazer sem o const, apenas com o document
    const bairro = document.querySelector("#bairro").value = endereço.bairro;
    const endereco = document.querySelector("#endereco").value = endereço.logradouro;
    const cidade = document.querySelector("#cidade").value = endereço.localidade;
    const estado = document.querySelector("#estado").value = endereço.uf;
};

const PesquisarCep = async () => {
  const cep = document.querySelector("#cep").value;

    if(cepValidar(cep)){
        const url = `http://viacep.com.br/ws/${cep}/json/`;

        const dados = await fetch(url);
        const endereço = await dados.json();
        if(endereço.erro == true){
            document.querySelector("#endereco").value = "endereço não encontrado";
        }else{
            preencherFormulario(endereço);
        }
    }else{
        document.querySelector("#endereco").value = "Cep incorreto";
        //reset tudo caso der incorreto
        document.querySelector("#bairro").value = "";
        document.querySelector("#endereco").value = "";
        document.querySelector("#cidade").value = "";
        document.querySelector("#estado").value = "";
    }
};

if(document.querySelector("#cep").length != 0){
    document.getElementById("cep").addEventListener("focusout", PesquisarCep);
}