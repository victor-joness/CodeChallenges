/* todas as classes aprendidas no curso
    $ : é a declaração de variavel em sass, é muito parecida com --var : #00 do css padrao, funciona igual um variavel js, so que no css
    aninhamento : é quando a gente usa a classe pai e a partir dela vamos fazendo o css dos filhos, fica mais clean o codigo, caso o projeto seja grande.
    @include : serve para usar mixin, e um mixin é uma funcao css onde passamos os parametros e com isso economizamos tempo e codigo.
    mixin : funcao em sass, pode ser muito bem usada.
    @else if, @if , @else : funciona como em js, so que com css e usando junto com conceito de funcao, temos que ficar ligado que na comparação nao se usa ().
    @for
        start through end : nao exclui o número final como parte da contagem
        start to end : exclui o número final como parte da contagem
    .text-#{$i} : uma forma de ir para a classe atraves do indice.
    @each : funciona como um map do js ou do haskell
    @import 'variables' : import do arquivo _variables.scss, no import não precisamos da extensao e do _, mais precisamos dele no nome do arquivo.
    @extend : caso uma classe mais generica tenha os mesmo propriedades em outras classes, podemos so usar um extend
*/

//comentarios mais detalhados das questões

//1 questao
//Uma característica do Sass que é diferente do CSS é que ele usa variáveis. Eles são declarados e configurados para armazenar dados, semelhante ao JavaScript.
//Em JavaScript, as variáveis ​​são definidas usando as palavras-chave let e const. No Sass, as variáveis ​​começam com $ seguido pelo nome da variável.
//$main-fonts: Arial, sans-serif;
//$headings-color: green;
//e para usar
/* 
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
*/
/* 
Um exemplo em que as variáveis ​​são úteis é quando vários elementos precisam ser da mesma cor. Se essa cor for alterada, o único lugar para editar o código é o valor da variável.
*/

//2 questao
/* O Sass permite o aninhamento de regras CSS, que é uma maneira útil de organizar uma folha de estilo.
Normalmente, cada elemento é direcionado para uma linha diferente para estilizá-lo, assim: */
/* 
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
} 

nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
*/

//3 questao
//No Sass, um mixin é um grupo de declarações CSS que podem ser reutilizadas em toda a folha de estilo.
//mixin são como funcoes css, nela a gente pode colocar varios parametros que sempre vamos utilizar, e usar ela passando apenas os parametros.
/* 
//como é em css (teriamos que escrever a mesma coisa para cada vez que fossemos usar os 4 elementos)
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
//funcao que chamamos de box-shadow, e com isso passamos apenas os parametros da funcao e ja vai aplicar os 4
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}

//Um mixin é chamado com a @include diretiva:
//essa é a forma de se usar
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
*/
//4 questao
//A @if, bem como @else if, @else diretiva em Sass é útil para testar um caso específico - ela funciona exatamente como a if instrução em JavaScript.
/* 
@mixin make-bold($bool) {
    @if $bool == true {
      font-weight: bold;
    }
  } 

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}

@mixin border-stroke($val){
      @if $val == light{
        border: 1px solid black;
      }@else if $val == medium {
        border: 3px solid black;
      }@else if $val == heavy {
        border: 6px solid black;
      }@else{
        border: none;
      }
}

//ficar ligado que o if não tem (), a comparação é feita diretamente sem o uso de ()
*/

//5 questao
//A @for diretiva adiciona estilos em um loop, muito semelhante a um for loop em JavaScript.
/* @foré usado de duas maneiras: "start through end" ou "start to end". A principal diferença é que o "start to end" exclui o número final como parte da contagem
e "start through end" inclui o número final como parte da contagem. */

/* 
@for $i from 1 through 12 {
    .col-#{$i} { width: 100%/12 * $i; }
} 

//convertendo em css, temos:

.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}

@for $i from 1 through 6{
    .text-#{$i} {font-size: 15px * $i}
}

crimos css para 5 classes, text-1 ao text-6, e cada uma recebe 15px * indica de font-size.
*/
//6 questao
//Sass também oferece a @each diretiva que percorre cada item em uma lista ou mapa. Em cada iteração, a variável é atribuída ao valor atual da lista ou mapa.
/* 
@each $color in blue, red, green {
    .#{$color}-text {color: $color;}
} 
*/

/* 
@each $color in blue, black, red{
    .#{$color}-bg{
      background-color : $color;
    }
} 
*/

//7 questao
//A @whilediretiva é uma opção com funcionalidade semelhante ao whileloop JavaScript. Ele cria regras CSS até que uma condição seja atendida.
/* 
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}

//font size aumenta de acordo com o numero da classe
$x: 1;
@while $x < 6 {
  .text-#{$x} { font-size: 15px * $x;}
  $x: $x + 1;
}
*/

//8 questao
//Parciais em Sass são arquivos separados que contêm segmentos de código CSS. Estes são importados e usados ​​em outros arquivos Sass. Essa é uma ótima maneira de agrupar código semelhante em um módulo para mantê-lo organizado.
//Nomes para parciais começam com o caractere sublinhado ( _), que diz ao Sass que é um pequeno segmento de CSS e não deve convertê-lo em um arquivo CSS
//@import 'variables' podemos importar codigos de sass ja feitos com isso

//9 questao
//O Sass tem um recurso chamado extendque torna mais fácil pegar emprestadas as regras CSS de um elemento e construí-las em outro.
/* 
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}

.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}

.info-important{
    @extend .info;
    background-color: magenta;
}
*/