/* todos as classes aprendidas no curso
    todo simples com react
    todo simples com redux
    todo com redux e react juntos
    mapStateToProps
    mapDispatchToProps
    connect método = connect(mapStateToProps, mapDispatchToProps)(MyComponent) 
*/

//comentarios mais detalhados das questões

//1 questao
// Por fim, como o Redux não foi projetado para funcionar com o React pronto para uso, você precisa usar o react-reduxpacote. 
//Ele fornece uma maneira de passar o Redux statee dispatchseus componentes React como arquivos props.

/* 
//fazendo uma quesstao normal, um componente com 2 estados
class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props){
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }

  
  // Change code above this line
  render() {
    return <div />
  }
};
*/

//2 questao
//TODO LIST REACT
/* 
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }

  submitMessage(){
     this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    }); 
  }
  render() {
    //const itens = this.state.messages.map((x, i)=>{return <li key={i}>{x}</li>})
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}></input>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.state.messages.map((x, i)=>{return <li key={i}>{x}</li>})}</ul>
      </div>
    );
  }
};
*/

//3 questao
/* 
------> ACTION
const ADD = "ADD"

------> ACTION CREATOR
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};
------> REDUCER
const messageReducer = (previousState = [], action) => {
    switch(action.type){
      case ADD : 
        return [...previousState, action.message];
        break;
      default :
        return previousState;
    }
      
}
------>STORE
const store = Redux.createStore(messageReducer);
*/

//4 questao
/* 
O React Redux fornece uma pequena API com dois recursos principais: Providere connect. Outro desafio abrange connect.
O Provideré um componente wrapper do React Redux que envolve seu aplicativo React. Esse wrapper permite que você acesse o Redux storee as dispatchfunções em toda a sua árvore de componentes.
Providerleva dois adereços, a loja Redux e os componentes filhos do seu aplicativo.

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
      return (
        <Provider store={store}>
          <DisplayMessages />
        </Provider>
      );
    }
  // Change code above this line
};

*/

//5 questao
/* 
O Providercomponente permite que você forneça statee dispatchpara seus componentes React, mas você deve especificar exatamente qual 
estado e ações deseja. Dessa forma, você garante que cada componente 
tenha acesso apenas ao estado de que precisa. Você consegue isso criando duas funções: mapStateToProps()e mapDispatchToProps().
*/
/* 
const state = [];

// Change code below this line

const mapStateToProps = (state, arg) => {
  return {
      messages: state
  }
}
*/
//6 questao
/* 
A mapDispatchToProps()função é usada para fornecer criadores de ação específicos para seus componentes React para que eles possam despachar ações contra a loja Redux. 
*/
/* 
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage : (message) => {dispatch(addMessage(message))}
  }
} 
*/

//7 questao
/* 
Agora que você escreveu mapStateToProps()as mapDispatchToProps()funções e, você pode usá-las para mapear statee dispatchpara propsum de seus componentes React.
O connectmétodo do React Redux pode lidar com essa tarefa.
Para usar esse método, passe as funções como argumentos e chame imediatamente o resultado com seu componente. Essa sintaxe é um pouco incomum e se parece com:
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
*/
/* 
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
*/

//8 questao
//Agora que você entende como usar connect para conectar o React ao Redux, pode aplicar o que aprendeu ao seu componente React que lida com mensagens.
/* 
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    
    return (
    <Provider store={store}>
      <Container />
    </Provider>
    );
  }
};
*/

//9 questao
//Extraia o estado local para o Redux
/* 
Agora que o Redux está conectado, você precisa extrair o gerenciamento de estado do Presentationalcomponente e colocá-lo no Redux. Atualmente, você tem o Redux conectado,
 mas está manipulando o estado localmente dentro do Presentationalcomponente.
*/

/* 
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState((state) => ({
      input: '',
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
*/

//10 questao