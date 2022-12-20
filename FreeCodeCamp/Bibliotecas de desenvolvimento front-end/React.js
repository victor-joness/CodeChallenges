/* todas as classes aprendidas no curso
    ReactDOM.render : usada para renderizar o jsx, passamos o componente e o nó node dom.
    className : o react é todo camelCase, então funcoes como onclick viram onClick, assim como class vira className
    fechamento de tags : podemos usar tags sem fechamento em jsx, alguns casos não vamos poder inserir nenhum elemento neles.
    criar componentes : podemos criar a partir de funcoes padroes js ou por class, dando extends na classe mae React.Component
    junção de componentes : podemos criar um componenete com varios componentes juntos sendo renderizado.
    aninhamento de componentes : podemos aninhar componentes, e esse componentes podem ter anhinhamento de mais componentes, então vamos separando eles assim para organização.
    ReactDOM.render : é difentes para COMPONENTES e para JSX, no COMPONENTES usamos <NomeComponente/>
    props : passando props para componentes filhos. (usamos props.Nome para componentes funcionais), e usamos this.props.Nome para componentes de classe
    props default : podemos definir props default para os compoenentes, que vao ser usados caso não tenha props sendo passada.
    propTypes : podemos definir o tipo que queremos na nossa props.

*/  



//comentarios mais detalhados das questões

//1 questao
//O React usa uma extensão de sintaxe do JavaScript chamada JSX que permite escrever HTML diretamente no JavaScript.
//ReactDOM.render(JSX, document.getElementById('root')) por debaixo dos panos
//const JSX = <h1>Hello JSX!</h1>;

//2 questao
//Uma coisa importante a saber sobre o JSX aninhado é que ele deve retornar um único elemento, Esse elemento pai envolveria todos os outros níveis de elementos aninhados.
//portanto ele so pode retorna um unico elemento, no caso seria a tag div, que é pai de todos os outros elementos.
{/* <div>
  <h1></h1>
  <p></p>
  <ul>
    <li></li>
    <li></li>
    <li></li>  
  </ul>
</div> */}

//3 questao
//comentariois em react segue essa sintaxe {/* */}

//4 questao
//Com o React, podemos renderizar esse JSX diretamente no HTML DOM usando a API de renderização do React conhecida como ReactDOM, por isso usamos ReactDOM.render(componentToRender, targetNode)
//ReactDOM.render(JSX, document.getElementById("challenge-node")), fazendo isso renderizamos o componente JSX no nó dom challenge-node que é uma div com id.

//5 questao
//o JSX usa className.
//Na verdade, a convenção de nomenclatura para todos os atributos HTML e referências de evento no JSX torna-se camelCase.

//6 questao
//No entanto, existem instâncias especiais em HTML chamadas “tags de fechamento automático” ou tags que não requerem uma tag de abertura e fechamento antes que outra tag possa ser iniciada.
//Por exemplo, a tag de quebra de linha pode ser escrita como <br>ou como <br />, mas nunca deve ser escrita como <br></br>, pois não contém nenhum conteúdo.
//Qualquer elemento JSX pode ser escrito com uma tag de fechamento automático e cada elemento deve ser fechado.
//ou seja no react podemos ter <div />, porem não vamos poder colocar nada nessa div.

//7 questao
//Os componentes são o núcleo do React. Tudo no React é um componente e aqui você aprenderá como criar um.
//Existem duas maneiras de criar um componente React. A primeira maneira é usar uma função JavaScript. Definir um componente dessa maneira cria um componente funcional sem estado .
/* 
const MyComponent = function() {
    // Change code below this line
    return  (
      <div>teste</div>
    )
} 
*/

//8 questao
//A outra maneira de definir um componente React é com a classsintaxe ES6. No exemplo a seguir, Kittenestende React.Component:
/* 
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
      return (
        <div><h1>Hello React!</h1></div>
      )
  
  
      // Change code above this line
    }
  };
*/

//9 questao
//Agora veremos como podemos compor vários componentes React juntos. Imagine que você está construindo um aplicativo e criou três componentes: a Navbar, Dashboarde Footer.
//Para compor esses componentes juntos, você pode criar um componente App pai que renderize cada um desses três componentes como filhos . 
/* 
return (
    <App>
     <Navbar />
     <Dashboard />
     <Footer />
    </App>
) 
*/

//10 questao
//O último desafio mostrou uma maneira simples de compor dois componentes, mas existem muitas maneiras diferentes de compor componentes com o React.
//O resultado deve ser um componente filho, aninhado em um componente pai, que está aninhado em um componente pai próprio!
/* 
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        <TypesOfFruit/>
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits/>
        </div>
      );
    }
  }; 
*/

//11 questao
//mais aninhamento de componenetes.

//12 questao
//Os componentes React são passados ​​de ReactDOM.render()forma um pouco diferente dos elementos JSX.
//renderizar componenetes é diferente de jsx, no componente usamos (<NomeComponente/>)
/* ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node')) */

//13 questao
//só fazemos do zero um componente a partir de class. 
/* 
class MyComponent extends React.Component{
    constructor(props){
      super(props)
    }
  
    render(){
      return(
        <div><h1>My First React Component!</h1></div>
      )
    }
  }
  
  ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node")) 
  */

//14 questao
//passando props para componentes filhos, e para componentes funcionais
{/* 
<App>
  <Welcome user='Mark' />
</App> 
*/}
//componente App, que renderiza o componenete Welcome, que passa por props o "user" mark
//com isso em Welcome, podemos acessar essa props.
//const Welcome = (props) => <h1>Hello, {props.user}!</h1>

/* 
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};
*/

//15 questao
//Este desafio analisa como as matrizes podem ser passadas como arquivos props. Para passar um array para um elemento JSX, ele deve ser tratado como JavaScript e colocado entre chaves.
//<ChildComponent colors={["green", "blue", "red"]} />
//Métodos de matriz como join()podem ser usados ​​ao acessar a propriedade.
//const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
//<p>green, blue, red</p>

//16 questao
//O React também tem uma opção para definir props padrão. 
//Você pode atribuir props padrão a um componente como uma propriedade no próprio componente e o React atribui o prop padrão, se necessário. Isso permite que você especifique o que um valor prop deve ser se nenhum valor for explicitamente fornecido. 
//MyComponent.defaultProps = { location: 'San Francisco' }
//com isso a props location do componente MyComponente,vai ter "San Francisco" como default
/* 
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line

ShoppingCart.defaultProps = { items: 0}
*/

//17 questao
//vimos na prática o uso de props.
//O React fornece recursos úteis de verificação de tipo para verificar se os componentes recebem props do tipo correto.
//Você pode configurar propTypesseu componente para exigir que os dados sejam do tipo array. Isso lançará um aviso útil quando os dados forem de qualquer outro tipo.
//É considerada uma prática recomendada definir propTypesquando você conhece o tipo de suporte com antecedência.
//Você pode definir uma propTypespropriedade para um componente da mesma forma que definiu defaultProps.
//MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
//isso quer dizer que handleClické uma propriedade necessária para aquele componente.
//Nota: A partir do React v15.5.0, PropTypesé importado independentemente do React, assim:import PropTypes from 'prop-types';

//Items.propTypes = {quantity: PropTypes.number.isRequired}, o quantity props é requirido que seja do tipo number, caso contrario vamos receber um aviso.

//18 questao
//Acessar props usando this.props
//Mas e se o componente filho para o qual você está passando uma propriedade for um componente de classe ES6, em vez de um componente funcional sem estado?
//Sempre que você se referir a um componente de classe dentro dele mesmo, use a palavra- thischave

//so passamos uma props para um componente class e acessamos essa props, this.props.name -> lembrar de usar chaves para tudo que for dinamico {this.props.name}

//19 questao
// um componente com estado é um componente de classe que mantém seu próprio estado interno.

//20 questao
//lembrar de usar {}
//Camper.defaultProps = {name: 'CamperBot'};
//Camper.propTypes = {name: PropTypes.string.isRequired} -> lembrar que o primeiro é minusculo e o segundo é maisculo propTypes e PropTypes

//21 questao
//22 questao
//23 questao
//24 questao
//25 questao
//26 questao
//27 questao
//28 questao
//29 questao
//30 questao
//31 questao
//32 questao
//33 questao
//34 questao
//35 questao
//36 questao
//37 questao
//38 questao
//39 questao
//40 questao
//41 questao
//42 questao
//43 questao
//44 questao
//45 questao
//46 questao
//47 questao