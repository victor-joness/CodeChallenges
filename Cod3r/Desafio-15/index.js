/* - 15: Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”. */

function vercarros(modelo){

    if( typeof modelo !== "string"){
        return "Uma das entradas é invalida"
    }

    switch(modelo){
        case "hatch":
            return `Compra efetuada com sucesso`
        case "sedans":
            return `Tem certeza que prefere este modelo?`
        case "motocicletas":
            return `Tem certeza que prefere este modelo?`
        case "caminhonetes":
            return `Tem certeza que prefere este modelo?`
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(vercarros("sedans"))

//outra forma

let comprarCarro2 = (automovel) => {
    switch (automovel) {
        case 'hatch':
            return 'Compra efetuada com sucesso'

        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'

        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}