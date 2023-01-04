/* todos as classes aprendidas no curso
    todo simples com react
    todo simples com redux
    todo com redux e react juntos

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


//6 questao
//7 questao
//8 questao
//9 questao
//10 questao