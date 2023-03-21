
/* todos as classes aprendidas no curso 
    $(document).ready(function() {ira execultar oq estiver aqui}); -> usado para execultar o scripr dps de carregar o html
    $ : -> todas as funcoes jquery começam com cifrao
    $("button").addClass("alguma class"); -> pegamos a tag button e vamos addclass nela, a class era pre-pronta antes. no caso .addClass que é uma funcao jquery
    $(".button") -> classe
    $("#button") -> id
    $("button").removeClass("btn-default"); -> .removeClass usado para remover a classe
    $("#target1").css("color", "red"); -> .css mudar a color do #target1 para vermelho, a sintaxe muda um pouco do css convecional
    $("#target1").prop("disabled", true); .prop usado para "desativar" o button, no caso ele fica inclicavel e meio transparente
    $("h3").html("<em>jQuery Playground</em>"); -> .html muda o conteudo da tag e a tag tbm se n me engano
    $("h3").text("jQuery Playground"); -> .text muda apenas o conteudo
    $("#target4").remove() -> .remove() remove completamente o seu codigo html, ao contrario do desativar que permanece mais muda algumas coisas
    $("#target2").appendTo("#right-well"); -> .appendTo  usado para "mover" seu codigo html
    $("#target5").clone().appendTo("#left-well"); -> .clone() usado para clonar o codigo html, depois disso podemos "mover" ele para o lado esquerdo
    $("#left-well").parent().css("background-color", "blue"); -> .parent() acesamos o pai do elemento, e a partir disso podemos anhinhar com outras funções
    $("#left-well").children().css("color", "blue"); -> .children() acessamoss os filhos daquele elemente, e a partir disso podemos fazer oq quiser
    $(".target:nth-child(2)").addClass("animated bounce"); -> pegamos os segundos filhos de target para adicionar a classe animated 
    $(".target:odd").addClass("animated shake"); -=> :odd e :even -> odd para numeros impares(posiçao 1,3,5) e even para pares(posição 0,2,4)
*/

//comentarios mais detalhados das questões

//1 questao
//Saiba como as tags de script e o documento pronto funcionam
//geralmente quando queremos execultar codigos JS na pagina é depois do html ser carregado, portanto usamos
//$(document).ready(function() {ira execultar oq estiver aqui});
//Isso é importante porque sem seu document ready function, seu código pode ser executado antes que seu HTML seja renderizado, o que causaria bugs.

//2 questao
//O jQuery geralmente seleciona um elemento HTML com um seletor e, em seguida, faz algo com esse elemento. usamos $ para funcoes
//Por exemplo, vamos fazer todos os seus buttonelementos saltarem. Basta adicionar este código dentro de sua função de documento pronto:
// $("button").addClass("animated bounce");
//isso só é possivel pq adicionamos a biblioteca jquery e Animate.css 
//podemos modificar a classe no css e depois só adiiconar ao meu html atraves de jquery

//3 questao
//Observe que, assim como nas declarações CSS, você digita a .antes do nome da classe.
//vamos seleciona a classe well
//em seguida, use a função do jQuery .addClass()para adicionar as classes animatede os arquivos shake.
//$(".well").addClass("animated shake");
//mais do mesmo, funciona como na questao anterior

//4 questao
//podemos pegar tambem pelo id, assim como no css
//$("#target3").addClass("animated fadeOut");
//mais do mesmo

//5 questao
//fizemos nada, so apagamos

//6 questao
//Agora você conhece três maneiras de segmentar elementos: por tipo: $("button"), por classe: $(".btn")e por id $("#target1").
/* $(document).ready(function() {
      $("button").addClass("animated");
      $(".btn").addClass("shake");
      $("#target1").addClass("btn-primary");
  });
*/

//7 questao
//remover classe
//$("button").removeClass("btn-default");

//8 questao
//Alterar o CSS de um elemento usando jQuery
//jQuery tem uma função chamada .css()que permite alterar o CSS de um elemento.
//$("#target1").css("color", "red");

//9 questao
//Desativar um elemento usando jQuery
//jQuery tem uma função chamada .prop()que permite ajustar as propriedades dos elementos.
//$("button").prop("disabled", true);
//usado para desativar todos os button

//10 questao
//Usando jQuery, você pode alterar o texto entre as tags inicial e final de um elemento. Você pode até alterar a marcação HTML.
//$("h3").html("<em>jQuery Playground</em>");
//jQuery também tem uma função semelhante chamada .text()que apenas altera o texto sem adicionar tags. Em outras palavras, essa função não avaliará nenhuma tag HTML passada para ela, mas, em vez disso, a tratará como o texto com o qual você deseja substituir o conteúdo existente.

//11 questao
//remover uma TAG do sseu codigo html
//jQuery tem uma função chamada .remove()que irá remover um elemento HTML inteiramente

//12 questao
//jQuery tem uma função chamada appendTo()que permite selecionar elementos HTML e anexá-los a outro elemento.
//Por exemplo, se quiséssemos passar target4do nosso poço direito para o nosso poço esquerdo, usaríamos:
//$("#target4").appendTo("#left-well");

//13 questao
//jQuery tem uma função chamada clone()que faz uma cópia de um elemento.
//Por exemplo, se quiséssemos copiar target2 de nosso left-well para nosso right-well, usaríamos:
//$("#target2").clone().appendTo("#right-well");
//Você notou que isso envolve unir duas funções jQuery? Isso é chamado de encadeamento de função e é uma maneira conveniente de fazer as coisas com jQuery.

//14 questao
/* Todo elemento HTML tem um parentelemento do qual ele é inheritspropriedade.
Por exemplo, seu jQuery Playground h3elemento tem o elemento pai de <div class="container-fluid">, que por sua vez tem o pai body.
 */
//jQuery tem uma função chamada parent()que permite acessar o pai de qualquer elemento que você selecionou.
//$("#left-well").parent().css("background-color", "blue")

//15 questao
//jQuery tem uma função chamada children()que permite acessar os filhos de qualquer elemento que você selecionou.
//$("#left-well").children().css("color", "blue")

//16 questao
//e quando queremos um filho em especifico ?, funciona muito parecido com css
//jQuery usa seletores CSS para elementos de destino. O target:nth-child(n)seletor CSS permite selecionar todos os n-ésimos elementos com a classe de destino ou tipo de elemento.
//$(".target:nth-child(3)").addClass("animated bounce");

//17 questao
//Você também pode direcionar elementos com base em suas posições usando :oddou :evenseletores.
/* Observe que o jQuery é indexado por zero, o que significa que o primeiro elemento em uma seleção tem uma posição de 0. Isso pode ser um pouco confuso,
 pois, contra-intuitivamente, :oddseleciona o segundo elemento (posição 1), quarto elemento (posição 3) e em breve.
*/
//$(".target:odd").addClass("animated shake");
//:odd numeros impares e :even numeros pares

//18 questao
//Veja como faríamos o corpo inteiro desaparecer:$("body").addClass("animated fadeOut");