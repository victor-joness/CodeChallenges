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
    text-danger : assim como o button ele faz com que a cor do texto fique vermelha indicando danger. 
    fas fa-thumbs-up : classe do fontawesome, usado em i tag ou span tag
    fas fa-trash : classe do fontawesome(lixeira), geralmente não decoramos essas tags, vamos direto no site do fontawesome e pesquisamos o icone que queremos e copiamos sua tag.
    form-control : usado diretamente nas tags html <input>, <textarea>e <select>, usando essa form-control as tags vão ter 100% de largura
    well : serve para mostrar visualmente o espaço das colunas de col-xs-*
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
//Você pode usar spans para criar elementos embutidos. Lembra quando usamos a btn-block classe para fazer o botão preencher toda a linha?
//Isso ilustra a diferença entre um elemento "inline" e um elemento "block".
//Ao usar o elemento inline span, você pode colocar vários elementos na mesma linha e até estilizar diferentes partes da mesma linha de maneira diferente.
//aprendemos a usar o span para mudar apenas 1 palavra que queremos, e no caso mudar a cor de apenas uma palavra com a text-danger

//12 questao
//Lembre-se de que o Bootstrap usa um sistema de grade responsivo, que facilita a colocação de elementos em linhas e a especificação da largura relativa de cada elemento. 
//com isso vamos colocar o titulo da pagina + a foto de gatinho na mesma linha 
//primeiro colocamos uma div que engloba os 2, com uma classe row, depois cada um recebe uma div propria com as propiedade col-xs-8 e col-xs-4, fazendo assim 12 colunas
//com isso eles vão dividir a mesma linha por causa do row, e ajustamos o quanto de coluna cada um recebe.

//13 questao
//Font Awesome é uma biblioteca conveniente de ícones. Esses ícones podem ser webfonts ou gráficos vetoriais. Esses ícones são tratados como fontes. Você pode especificar seu tamanho usando pixels, e eles assumirão o tamanho da fonte de seus elementos HTML pais.
//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
//podemos acessar o site e conferir o pseudo-nome de cada icone, com esse pseudo nome podemos adicionar atraves de classe em i tags ou span tags
//aqui no caso usamos fas fa-thumbs-up (joinha)

//14 questao
//Adicione ícones impressionantes de fontes a todos os nossos botões com o uso do fontawesome

//15 questao
//Botões de opção com estilo responsivo
//Você também pode usar as classes do Bootstrap em "form" elementos!
//no caso do exemplo usamos class="col-xs-6" no input radio(não diretamente na tag input) mais sim em uma div anhinhada.

//16 questao
//caixas de selecao tambem se aplicam a questao acima, então podemos usar classes bootstrap em div em volta dos inputs.

//17 questao
//Estilizar entradas de texto como controles de formulário
//Você pode adicionar o fa-paper-planeícone Font Awesome adicionando <i class="fa fa-paper-plane"></i>dentro do seu elemento de envio button.
//depois vimos que usando form-control, a largura da tag fica em 100%

//18 questao
//Alinhar elementos de formulário responsivamente com Bootstrap
//Agora vamos colocar seu formulário input e seu envio button na mesma linha.
//fazemos assim como anteriormente, uma div pai com class row e divs filhos com col-xs-*

//a partir daqui provavelmente vc consiguira fazer sozinho, ficou muito facil essa parte do curso, mas caso queira ver aqui está a continuação.

//19 questao
//Criar um título Bootstrap
//Agora vamos construir algo do zero para praticar nossas habilidades em HTML, CSS e Bootstrap.
//Construiremos um playground jQuery, que em breve colocaremos em uso em nossos desafios jQuery.
//fazemos o uso do text-center e do text-primary, para centralizar o h3 e mudar sua cor

//20 questao
//Hospede nossa página dentro de um div de fluido de contêiner do Bootstrap
//so colocamos uma div pai ao h3 com container fluid

//21 questao
//Criar uma linha de Bootstrap
//Agora vamos criar uma linha Bootstrap para nossos elementos inline.
//so criamos uma div com a classe row

//22 questao
//Agora que temos uma Bootstrap Row, vamos dividi-la em duas colunas para abrigar nossos elementos.
//so crimaos 2 divs com col-xs-6

//23 questao
//Criar poços de inicialização
//Bootstrap tem uma classe chamada wellque pode criar uma sensação visual de profundidade para suas colunas.
//<div class="well"></div>, que serve para mostrar o espaço que ta sendo usado

//24 questao
//so adicionamos a tag button no html

//25 questao
//so adicionamos o  class="btn btn-default" em cada button

//26 questao
//Crie uma classe para segmentar com seletores jQuery
//Nem toda classe precisa ter CSS correspondente. Às vezes, criamos classes apenas com o objetivo de selecionar esses elementos com mais facilidade usando jQuery.
//adionamos a classe target em cada button class

//27 questao
//Vamos dar um id único para cada um dos nossos divelementos de classe well.
//colocamos id nas div well, left-well e right-well

//28 questao
//Por uma questão de clareza, vamos rotular nossos dois poços com seus IDs.
//<h4>#left-well</h4> e <h4>#right-well</h4>

//29 questao
//Também queremos poder usar o jQuery para direcionar cada botão por seu ID exclusivo.
//adionamos id nos button id="target1", id="target2" etc

//30 questao
//Assim como rotulamos nossos poços, queremos rotular nossos botões.
//#target1 no button container html

//31 questao
//ensina a comentar codigo
//<!--Code below this line should not be changed-->