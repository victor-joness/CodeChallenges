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
    state : criada apenas nas classes componentes, e dentro do constructor de classe, bem como o estado de uma props. (infos linha 253)
    state : é encapsulado a cada componente, a menos que eu passe o state como é feito em props.
    const no render() : pode ser usado para economizar linhas, calculos, funcões, um meio de acesso entre o componente e o return.
    this.setState({}) : usado no componente class, usado para att o state e usar apos uma funcção ou qualquer mudança/logica;
    setState() : tem um tambem no componente function
    vincular o this : usado para um metodo ter acesso ao this do construtor.
    this.function : é usado o this na hora de chamar no html
    state e props atuais : eles podem ser assincronas, então podem guarda valores antigos, e as vezes não queremos isso.
    entrada controlada : geralmente entrada de texto = input ou textArea, onde fazemos de um modo que o proprio react vai controlar esses input, e a partir disso podemos fazer qualquer coisa que queremos.
    dados unidirecionais : ao inves de ficar criando varios state, criamoss apenas 1 principal e vamos distribuino os dados atraves de props, onde os filhos herdam.
    metodos de clico de vida ou hooks de ciclo de vida : shouldComponentUpdate, componentDidUpdate
    componentDidUpdate : é o melhor lugar para anexar qualquer ouvinte de evento que você precise adicionar para uma funcionalidade específica, por exemplo uma chamada a api;
    shouldComponentUpdate : define se vc quer ele seja renderizado novamente ou não, por padrao todo valor que muda em reacrt é renderizado a cada vez que muda
    style inline : usamos camelCase e usamos o style como se fosse um objet em JS.
    constantes como css : podemos usar constantes, como se fossem object em js, a partir disso usamos o object no styles tag, observer que o styles tag só aceita object
    if/else dentro do render : podemos usar if/else dentro do render metodo, isso serve para renderizar coisas diferentes, por exemplo logado == true ou logado == false renderiza diferentes coisas.
    && condition dentro do JSX : {this.state.display && <h1>Displayed</h1>}, com isso ele só vai renderizar o h1 caso o state seja true.
    operador ternario : usado dentro do return, ele pode ser aninhado e verificar quando condições a gente quiser.
    object js como css : muda css atraves de const js usada como object, podemos fazer tudo de js com isso, ex length value etc.
    no render podemos retorna map(HTML)
    Quando você cria uma matriz de elementos, cada um precisa de um key atributo definido para um valor exclusivo. {podemos fazer isso com map, definindo uma <li key={valor}>}
    aprendemos o metodo filter nas matrizes
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
//O estado consiste em todos os dados que seu aplicativo precisa conhecer, que podem mudar com o tempo. Você deseja que seus aplicativos respondam às mudanças de estado e apresentem uma IU atualizada quando necessário. 
//Você cria um estado em um componente React declarando uma statepropriedade na classe do componente em seu arquivo constructor. 
//A statepropriedade deve ser definida como JavaScript object.
//Você tem acesso ao stateobjeto durante toda a vida útil do seu componente. Você pode atualizá-lo, renderizá-lo em sua interface do usuário e passá-lo como props para componentes filhos
//Observe que você deve criar um componente de classe estendendo React.Componentpara criar stateassim.
//podemos ver que criamos o state no constructor da classe e definimos a props firstName

/* 
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstName : "victor"}
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
*/

//22 questao
//Depois de definir o estado inicial de um componente, você pode exibir qualquer parte dele na interface do usuário que é renderizada
//Se um componente for stateful, ele sempre terá acesso aos dados stateem seu render()método. Você pode acessar os dados com this.state.
//Se você deseja acessar um valor de estado dentro do returnmétodo render, você deve colocar o valor entre chaves.
//Observe que, se você tornar um componente com estado, nenhum outro componente saberá de seu arquivo state. 
//É statecompletamente encapsulado ou local para esse componente, a menos que você passe dados de estado para um componente filho como props.
//fizemos mais testes com states.

//23 questao
//Existe outra maneira de acessar stateem um componente. 
//No render()método, antes da returndeclaração, você pode escrever JavaScript diretamente. Por exemplo, você pode declarar funções, acessar dados de stateou props, executar cálculos nesses dados e assim por diante. 
//Em seguida, você pode atribuir quaisquer dados às variáveis, às quais você tem acesso na returninstrução.

//com isso ao inves de ficar escrevendo this.state.name, só usamos "name";
/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name
    // Change code above this line
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
*/

//24 questao
//Também existe uma maneira de alterar o arquivo state.
//O React fornece um método para atualizar o componente statechamado setState. Você chama o setStatemétodo dentro de sua classe de componente da seguinte forma: this.setState(), passando um objeto com pares chave-valor.
//O React espera que você nunca modifique statediretamente, em vez disso, sempre use this.setState()quando ocorrerem mudanças de estado.

//então basicamente o this.setState({}) atualiza ou modifica o nosso state, para que ele não seja estatico apenas com o valor de criação;
//com isso temos que se o button for apertado ele execulta o handleClick() function, e dentro da function ele att o state.
/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({name : "React Rocks!"});
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
*/

//25 questao
//Vincule 'this' a um método de classe
//Além de configurar e atualizar state, você também pode definir métodos para sua classe de componente
//Um método de classe geralmente precisa usar a thispalavra-chave para poder acessar as propriedades da classe (como statee props) dentro do escopo do método. 
// Existem algumas maneiras de permitir que seus métodos de classe acessem arquivos this.
//this.handleClick = this.handleClick.bind(this)
//com isso o nosso metodo handleClick vai poder acessar os valores com o this, então ele pode acessar this.state, this.props etc.
//lembrar que na chamada de funcão definimos como this.handleClick, então é isso que usamos no html

/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
*/

//26 questao
//Às vezes, você pode precisar saber o estado anterior ao atualizar o estado. No entanto, as atualizações de estado podem ser assíncronas - isso significa que o React pode agrupar várias setState()chamadas em uma única atualização
//Isso significa que você não pode confiar no valor anterior this.stateou this.propsao calcular o próximo valor. Portanto, você não deve usar código como este:
/* 
this.setState({
  counter: this.state.counter + this.props.increment
});
*/
//Em vez disso, você deve passar setStateuma função que permite acessar o estado e as props
//Isso significa que o acima deve ser reescrito como, para garantir que o setState pegou o state e o props mais atual:
/*
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
*/
//Você também pode usar um formulário sem propsse precisar apenas de state:
/* 
this.setState(state => ({
  counter: state.counter + 1
}));
*/

//nesse codigo, vinculamos o this.visibility para ele ter acesso ao this, criamos a funcao que atualiza o state mudando de acordo com o atual, e usamos if/else no render() para ai sim decidir o return se ele fosse true ou false;
/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility(){
    this.setState((state) => ({visibility : !state.visibility}))
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
*/

//27 questao
//fazemos uma simples questao de incremento/descrmento/reset
/* 
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    // Change code above this line
  }
  // Change code below this line
  increment(){
    this.setState((state) => ({count : state.count + 1}));
  }
  decrement(){
    this.setState((state) => ({count : state.count - 1}));
  }
  reset(){
    this.setState({count : 0});
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
*/

//28 questao
//Seu aplicativo pode ter interações mais complexas entre statee a interface do usuário renderizada.
//A entrada do usuário torna-se parte do aplicativo state, então o React controla o valor desse campo de entrada. Normalmente, se você tiver componentes React
//com campos de entrada nos quais o usuário pode digitar, será um formulário de entrada controlado.
//ControlledInput para criar um input elemento controlado. 
//já está inicializado com uma inputpropriedade que contém uma string vazia. Esse valor representa o texto que um usuário digita no inputcampo.

/* 
//com isso temos um input controlado pelo react, e temos total controle sobre seu conteudo
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
  handleChange(event){
    this.setState({input : event.target.value})
  }
  // Change code above this line
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}></input>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
*/

//29 questao
//mais de inputs controlados, agora temos um form
/* 
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault()
    this.setState({submit : this.state.input})
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}></input>
          <button type='submit'>Submit!</button>
        </form>
          <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
*/

//30 questao
//Um padrão comum é ter um componente stateful contendo o que é stateimportante para seu aplicativo, que então renderiza os componentes filhos.
//Você deseja que esses componentes tenham acesso a algumas partes desse state, que são passadas como props.
//O estado flui em uma direção para baixo na árvore dos componentes de seu aplicativo, do componente pai com estado para os componentes filho, chamamos de fluxo de dados unidirecional
//Os componentes filhos recebem apenas os dados de estado de que precisam
//portanto os estado principais ficam em myapp, porem o navbar precisa do nome, então ao ainves de eu criar um estado no navbar eu so passo o nome atraves do props;
/* 
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.name;
    return (
    <div>
      <h1>Hello, my name is: {name}</h1>
    </div>
    );
  }
};
*/

//31 questao
//Você pode passar statecomo props para componentes filhos, mas não está limitado a passar dados. Você também pode
// passar funções de manipulador ou qualquer método definido em um componente React para um componente filho.
//É assim que você permite que os componentes filhos interajam com seus componentes pais.
/* 
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
*/

//32 questao
//metodos de clico de vida
/* 
Aqui está uma lista de alguns dos principais métodos de ciclo de vida: componentWillMount() componentDidMount() 
shouldComponentUpdate() componentDidUpdate() componentWillUnmount()As próximas lições abordarão alguns dos casos de uso básicos para esses métodos de ciclo de vida.
*/

//33 questao
//Use o método de ciclo de vida componentDidMount
//A maioria dos desenvolvedores da Web, em algum momento, precisa chamar um terminal de API para recuperar dados. 
//A melhor prática com o React é fazer chamadas de API ou quaisquer chamadas para seu servidor no método de ciclo de vida componentDidMount().
//uando você chama uma API nesse método e define seu estado com os dados que a API retorna, ela aciona automaticamente uma atualização assim que você recebe os dados.
//ele so execulta qiando recebe os dados e depois de renderizar, isso é bom pq economiza memoria e não sobrecarrega o sistema, e não imprime coisas que não deviam
/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1276
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
*/

//34 questao
//O componentDidMount() método também é o melhor lugar para anexar qualquer ouvinte de evento que você precise adicionar para uma funcionalidade específica
//caso eu aperte o enter ele renderiza + 1 texto somando com o antigo.
/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown",this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
*/

//35 questao
//Otimize Re-Renderizações com shouldComponentUpdate
//o React fornece um método de ciclo de vida que você pode chamar quando os componentes filhos recebem new stateou props, e declara especificamente se os componentes devem ser atualizados ou não. 
//O método é shouldComponentUpdate(), e leva nextProps e nextState como parâmetros.
//observe que ele só vai att se o numero for par, com isso o shouldComponentUpdate returna true, e se ele retorna true é pq precisa att, caso contario ele não att.

/* 
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if(nextProps.value % 2 == 0){
     return true; 
    }else{
      return false;
    }
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
*/

//36 questao
//Apresentando Estilos Inline
//Existem outros conceitos complexos que adicionam recursos poderosos ao seu código React. Mas você pode estar se perguntando sobre o problema mais simples de como estilizar esses elementos JSX que você cria no React. 
//voce pode fazer igual com html, só que com ClassName
//Você aplica estilos embutidos a elementos JSX de forma semelhante a como faz em HTML, mas com algumas diferenças de JSX. Aqui está um exemplo de um estilo inline em HTML:
// <div style="color: yellow; font-size: 16px">Mellow Yellow</div>
//em react funciona da mesma forma, so que como javascript pela forma que ele compila o codigo
// Em vez disso, você o define igual a um JavaScript object.
//<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
//lembre-se que o react é todo camelCase.

//37 questao
// Palavras hifenizadas como font-sizesão sintaxe inválida para propriedades de objeto JavaScript, então o React usa maiúsculas e minúsculas.
//Como regra, quaisquer propriedades de estilo hifenizadas são escritas usando maiúsculas e minúsculas em JSX.
//por padrao o font-size usado é em px, mais se vc quer usar em ou rem, essses valores devem ser colocados entre parenteses.
//{fontSize: "4em"}
//Se você tiver um grande conjunto de estilos, poderá atribuir um estilo objecta uma constante para manter seu código organizado.
//Declare seus estilos constantes como uma variável global na parte superior do arquivo.
//inicialize styles a constante e atribua an objectcom três propriedades de estilo e seus valores a ela. 
//com isso podemos organizar melhor nosso codigo, e reaproveitar os css.
/* 
// Change code above this line
const styles = {
  color: "purple",
  fontSize : 40,
  border: "2px solid purple"
}

class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: "purple", fontSize: 40, border: "2px solid purple"}}>Style Me!</div>
    );
    // Change code above this line
  }
};
//com variavel.
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};
*/

//38 questao
//até agora sempre usamos {} para injetar javascript no JSX, mas não são a única maneira de utilizar o código JavaScript em seus componentes React.
//Você também pode escrever JavaScript diretamente em seus rendermétodos, antes da returninstrução,sem inseri-lo entre chaves.
//Isso ocorre porque ainda não está dentro do código JSX. 
//Quando quiser usar uma variável posteriormente no código JSX dentro da returninstrução, coloque o nome da variável entre chaves.
//fizemos uma questao que aperta o button, ele gra um numero aleatorio de 0 a 20, e depois eu pego esse state e passo pro array, qu eme retorna uma frase de acrodo com a posução do array.

//39 questao
//Renderizar com uma condição If-Else
//podemos usar if/else no render metodo, então, if(){return a}else{return b}, com isso temos diferentes renderizações.
//MyComponent contém um booleanem seu estado que rastreia se você deseja exibir algum elemento na interface do usuário ou não, O buttonalterna o estado desse valor. 
/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line

    if(this.state.display == true){
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
    }else{
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
       </div>
    );
    }
  }
};
*/

//40 questao
//Use && para uma condicional mais concisa
//As if/elsedeclarações funcionaram no último desafio, mas há uma maneira mais concisa de obter o mesmo resultado.
// Imagine que você está rastreando várias condições em um componente e deseja que diferentes elementos sejam renderizados dependendo de cada uma dessas condições
//Em vez disso, você pode usar o &&operador lógico para executar a lógica condicional de maneira mais concisa. Isso é possível porque você deseja verificar se uma condição é true, e se for, retornar alguma marcação. Aqui está um exemplo:
//{condition && <p>markup</p>}
//Se conditionfor true, a marcação será retornada.
//Você pode incluir essas instruções diretamente em seu JSX e agrupar várias condições escrevendo &&após cada uma. Isso permite que você manipule uma lógica condicional mais complexa em seu render()método sem repetir muito código.

//observe que não precisamos usar o == true pq já é padrao se for true ele vai renderizar, isso serve MUITO, quando queremos renderizar pequenos componentes / coisas, agiora quando for pra mudar a tela inteira o if;else pode ser melhro.

/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed</h1>}
       </div>
    );
  }
};
*/

//41 questao
//: o operador ternário, é mais uma forma de renderização por condição, isso pq no jsx aceita o ternario dentro do return, enquanto o if else é feito fora do return, 
//e como o ternario é basicamnete a mesma coisa do if/else, ele é muito usado no react
//condition ? expressionIfTrue : expressionIfFalse;
//usado dentro do return, ele verifica 2 condicionais e retorna 3 coisas diferentes.
//{this.state.userAge == "" ? buttonOne : this.state.userAge < 18 ? buttonThree:buttonTwo}

//42 questao
//Renderizar condicionalmente a partir de props
// Usar props para renderizar código condicionalmente é muito comum com desenvolvedores React
//você configurará um componente filho para tomar decisões de renderização com base em props

//com isso fazemos uma expresao aleatoria de true e false, e de acordo com isso, imprimimos se ele ganha ou perde o jogo.
/* 
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.fiftyFifty)

    return (
      <h1>
      {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
      </h1>
    )

    if(this.props.fiftyFifty){
      return(
        <h1>You Win!</h1>
      )
    }else{
        return(
          <h1>You Lose!</h1>
        )
    }
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(() => {
      // Complete the return statement:
      return {
        counter: this.state.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression}/>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
*/

//43 questao
//alterar css com base no state do componente
//ocê também pode renderizar CSS condicionalmente com base no estado de um componente React. Para fazer isso, verifique uma condição e, se essa condição for atendida, modifique o objeto de estilos atribuído aos elementos JSX no método render.
//com isso, estamos verificando atraves de js, se o input tem mais de 15 caracteres, caso tenha ele muda a const object que ta sendo usada como estilo css.
/* 
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  
  render() {
    let inputStyle;
    // Change code below this line
    if((this.state.input).length > 15){
      inputStyle = {
        border: '3px solid red'
      };
    }else{
      inputStyle = {
        border: '1px solid black'
      };
    }
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
*/

//44 questao
//Use Array.map() para renderizar elementos dinamicamente
//A renderização condicional é útil, mas você pode precisar de seus componentes para renderizar um número desconhecido de elementos. 
//Os programadores precisam escrever seu código para lidar corretamente com esse estado desconhecido antes do tempo
//Por exemplo, você cria um aplicativo simples "To Do List". Como programador, você não tem como saber quantos itens um usuário pode ter em sua lista.
/* 
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput : "",
      toDoList : []
    }
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((valor) => <li>{valor}</li>)
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
*/

//45 questao
//Quando você cria uma matriz de elementos, cada um precisa de um keyatributo definido para um valor exclusivo.
//com isso cada elemento renderizado vai ter seu propio nome como key exclusiva, alem disso renderizamos todos 

/* 
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((valor)=><li key={valor}>{valor}</li>); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
*/

//46 questao
//Use Array.filter() para filtrar dinamicamente uma matriz
//Por exemplo, se você tiver uma matriz de usuários com uma propriedade onlineque pode ser definida como trueou false, poderá filtrar apenas os usuários que estão online escrevendo:
//let onlineUsers = users.filter(user => user.online);

//com isso usamos o filter para pegar os online e a partir disso usamos o map para renderizar o nome de cada um em uma li.

/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // Change this line
    console.log(usersOnline)
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
*/

//47 questao
//Renderize React no servidor com renderToString
//Até agora, você tem renderizado componentes React no cliente. Normalmente, isso é o que você sempre fará.
//No entanto, existem alguns casos de uso em que faz sentido renderizar um componente React no servidor. Como React é uma biblioteca de visualização JavaScript e você pode executar JavaScript no servidor com Node, isso é possível. 
//. Na verdade, o React fornece um renderToString()método que você pode usar para esse propósito.

/* 
Existem duas razões principais pelas quais a renderização no servidor pode ser usada em um aplicativo do mundo real. Primeiro, sem fazer isso, seus aplicativos React 
consistiriam em um arquivo HTML relativamente vazio e um grande pacote de JavaScript quando carregado inicialmente no navegador. Isso pode não ser ideal para mecanismos de pesquisa que 
estão tentando indexar o conteúdo de suas páginas para que as pessoas possam encontrá-lo. Se você renderizar a marcação HTML inicial no servidor e enviá-la ao cliente, o carregamento da p
ágina inicial conterá toda a marcação da página que pode ser rastreada pelos mecanismos de pesquisa. Em segundo lugar, isso cria uma experiência de carregamento de página inicial mais rápida
porque o HTML renderizado é menor que o código JavaScript de todo o aplicativo. O React ainda será capaz de reconhecer seu aplicativo e gerenciá-lo após o carregamento inicial.
*/

/* 
O renderToString()método é fornecido em ReactDOMServer, que está disponível aqui como um objeto global. O método recebe um argumento que é um elemento React. Use isso para 
renderizar Appem uma string.
*/
//ReactDOMServer.renderToString(<App/>)