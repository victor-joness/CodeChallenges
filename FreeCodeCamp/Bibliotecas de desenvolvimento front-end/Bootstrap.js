//começamos importando o bootstrap para o nosso codigo atraves da tag link
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"></link>

/* todos as classes aprendidas no curso 
    container-fluid : tem varios tipos de containes, esse serve para deixar todo o nosso codigo html dentro do container com largura 100%
    img-responsive : deixa uma imagem responsiva, ou seja ele vai caber na tela idependente do tamanho da imagem
    text-center : deixa o h2 centralizado de acordo com o tamanho da tela, sem o uso de css
    btn : todo button que vamos criar vai ter essa tag padrao
    btn-default : default seria meio que o tamanho do botao, temos outras variaveis(small, large), esse defalt pega o tamanho do conteudo da tag, no caso o tamanho da palavra <button>"A"<button>
    btn-outline-primary : btn com outline(borda) primary então é da cor azul, se fosse success ele seria da cor verde, se fosse danger seria da cor vermelha
    btn-warning : cor amarela por causa do warning
    btn-block : feita para oculpar 100% do tamanho horizontal, os elementos apois ele que são interferidos vão para uma linha abaixo.
    col-md-* : o bootstrap é divido em 12 colunas, aqui col significa colunas, md signigica que o tamanho dessas colunas vão ser medias, e * significa quantas colunas aquela div vai usar
    col-xs-* : xs indica extra pequeno(basicamente uma tela de celular mt pequeno)
    row : é usado igual ao flex-direction: row; que é usado para deixar os item em linha um do lado do outro.
    

*/
//comentarios mais detalhados das questões

//1 questao
//depois ele pode para a gente envolver todo o codigo html em uma unica div com classe "container-fluid"
/* 
    <div class="container-fluid">
        <h2 class="red-text">CatPhotoApp</h2>
    </div>
*/

//2 questao
//agora nos pede para adicionar uma segunda imagem ao conteudo html, portanto fazemos uma tag a e dentro dela uma tag
//img, essa tag img vai ter a classe img-responsive, que é a responsavel por deixa a img no tamanho da nossa tela.

//3 questao
//conhecemos a classe text-center, que faz a centralização automatica do nosso h2, ele só pede pra gente centralizar o h2.

//4 questao
//aprendemos a criar um button sem a necessidade de css, usamos 2 tags, uma chamada btn e outra btn-default, adicionamos a tag button padrao do html, e depois adicionamos as classes citadas.

//5 questão
//Normalmente, seus button elementos com as classes btne btn-default são tão largos quanto o texto que eles contêm.
//Ao torná-los elementos de bloco com a classe adicional de btn-block, seu botão se estenderá para preencher todo o espaço horizontal da página e quaisquer elementos que o sigam fluirão para uma "nova linha" abaixo do bloco.
//Este botão ocuparia 100% da largura disponível.

//6 questão
//fala um pouco da questão da cor dos botões, no caso o primary é a cor azul, danger cor vermelha, warning amarela, light branca, dark preta.

//7 questão
//A btn-info classe é usada para chamar a atenção para ações opcionais que o usuário pode realizar. bnt-info vem com uma cor mais amigavel um azul claro, que gerlamente indica infos.

//8 questao
//A btn-dangerclasse é a cor do botão que você usará para notificar os usuários de que o botão executa uma ação destrutiva, como excluir uma foto de gato.

//9 questao
//O Bootstrap usa um sistema de grade responsivo de 12 colunas, que facilita a colocação de elementos em linhas e a especificação da largura relativa de cada elemento.
//A maioria das classes do Bootstrap pode ser aplicada a um div elemento.
//a classe de Bootstrap col-md-*. Aqui, mdsignifica médio e *é um número que especifica quantas colunas de largura o elemento deve ter. Nesse caso, a largura da coluna de um elemento em uma tela de tamanho médio, como um laptop, está sendo especificada.
//Coloque os botões Like, Infoe Deletelado a lado aninhando todos os três dentro de um <div class="row">elemento e, em seguida, cada um deles dentro de um <div class="col-xs-4">elemento.
//classe row significa que os itens vão ficar um do lado do outro, e col-xs-4 signigica que as colunas vão ser extra pequena e que cada item vai usar 4 colunas

//10 questao
//só apagamos umas classes de css pre definidas e vamos fazer as mesmas com bootstrap, no caso eu tava usando uma que definia o tamanho da 1 imagem de gato, e agora usamos a 
//img-responsive que faz basicamente a mesma coisa.

//11 questao