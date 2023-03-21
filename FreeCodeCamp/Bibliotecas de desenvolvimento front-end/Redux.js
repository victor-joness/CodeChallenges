/* todas as classes aprendidas no curso
    redux store : é o responsavel por gerenciar todo o estado do seu aplicativo react
    createStore() : metodo que cria o store, é obrigatorio o uso da funcao reduce como argumento. ==> Redux.createStore(reducer)
    getState() : metodo do redux que permite que eu pegue o valor atual do state, ==> const currentState = store.getState()
    action : é o conteudo que vamos atualizar o nosso state , ele só atualiza atraves de ações
    criadores de action : é uma função js simples que retorna uma action, ellle é quem vai mandar a action pro redux ,então basicamente, temos a action e temos o criador de action que envia a ação pro redux.
    dispatch : o metodo para dispachar uma action creater é store.dispatch(), passamos como parametro o action creator 
    switch case : é util para lidar com varios tipos de ação
    CONST somente de leitura : é mt usada quando vamos declarar os typos, pois são imutaveis.
    store.subscribe() : essa funcao é execultada, toda vez que temos um despatch, ou seja, podemos por exemplo calcular quantos despatch teve no nosso state, e varia outras coisas.
    combineReducers() : é usada para combinar varios rendutores em 1 só, isso mantem a logica do redux em usar apens um objeto no store.
    funcoes assincronas com redux : usamos uma outra funcao na hora de declarar o store const store = Redux.createStore(asyncDataReducer,Redux.applyMiddleware(ReduxThunk.default));
    alem disso, temos uma funcao que cuida da chamada assincrona chamada de handleAsync, que temos mais detalhes la em baixo
    retornando states assincronos: aqueles que não mudam o state do redux, apenas faz a copia e me retorna um novo state.
    operador spread : é ideial para isso, ele realiza uma copia do array e podemos adicionar novos itens.
    Object.assign() : é usado para copiar objetos;

*/

//comentarios mais detalhados das questões

//1 questao
//Redux é uma estrutura de gerenciamento de estado que pode ser usada com várias tecnologias da Web diferentes, incluindo React.
//No Redux, existe um único objeto de estado que é responsável por todo o estado do seu aplicativo. 
//Isso significa que se você tivesse um aplicativo React com dez componentes e cada componente tivesse seu próprio estado local, todo o estado do seu aplicativo seria definido por um único objeto de estado alojado no Redux store.
//a store Redux é a única fonte de verdade quando se trata do estado do aplicativo.
//Isso também significa que, sempre que qualquer parte do seu aplicativo quiser atualizar o estado, deverá fazê-lo por meio da store Redux.
//O Redux storeé um objeto que contém e gerencia aplicações state. 
// Existe um método chamado createStore()no objeto Redux, que você usa para criar o Redux store. Este método usa uma reducerfunção como um argumento obrigatório. 

// A reducer função é abordada em um desafio posterior e já está definida para você no editor de código. Ele simplesmente recebe statecomo argumento e retorna state.
/* 
// o parametro state por padrão é 5
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer)
*/

//2 questao
//Obtenha o estado da store Redux
//O objeto de armazenamento do Redux fornece vários métodos que permitem que você interaja com ele. Por exemplo, você pode recuperar a corrente statemantida no objeto de armazenamento Redux com o getState()método.

/* 
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

const currentState = store.getState()
*/

//3 questao
//Como o Redux é uma estrutura de gerenciamento de estado, atualizar o estado é uma de suas principais tarefas, isso acontece pela ação de despacho
//Uma ação é simplesmente um objeto JavaScript que contém informações sobre um evento de ação que ocorreu. 
/* 
. A loja Redux recebe esses objetos de ação e, em seguida, atualiza seu estado de acordo. Às vezes, uma ação do Redux também carrega alguns dados. 
Por exemplo, a ação carrega um nome de usuário depois que um usuário efetua login.
 Embora os dados sejam opcionais, as ações devem carregar uma typepropriedade que especifica o 'tipo' de ação que ocorreu.
*/

//Pense nas ações do Redux como mensageiros que fornecem informações sobre eventos que acontecem em seu aplicativo para a loja Redux
/* 
const action = {
  type : "LOGIN"
}
*/

//4 questao
//Depois de criar uma ação, a próxima etapa é enviar a ação para a loja Redux para que ela atualize seu estado.
//No Redux, você define criadores de ação para realizar isso. Um criador de ação é simplesmente uma função JavaScript que retorna uma ação.
//em outras palavras, criadores de ação criam objetos que representam eventos de ação.
/* 
const action = {
  type: 'LOGIN'
}
// Define an action creator here:

function actionCreator(action){
  return action;
}

const actionCreator = (action) => {
  return action;
}
*/

//5 questao
//depois de criar a action e de criar o action creater, temos que despachar essa action
//dispatch O método é o que você usa para despachar ações para a loja Redux.

//A loja Redux no editor de código tem um estado inicializado que é um objeto que contém uma loginpropriedade atualmente definida como false.
//Há também um criador de ação chamado loginAction()que retorna uma ação do tipo LOGIN.

/* 
--------->> store do redux
const store = Redux.createStore(
  (state = {login: false}) => state
);

------->> action creater
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
--------->> dispatch
store.dispatch(loginAction());

*/
//6 questao
//Depois que uma ação é criada e despachada, a loja Redux precisa saber como responder a essa ação, Este é o trabalho de uma reducer função.
//Os redutores no Redux são responsáveis ​​pelas modificações de estado que ocorrem em resposta às ações. A reducer recebe state e action como argumentos e sempre retorna um novo state.
//É importante observar que esta é a única função do redutor.
//redutor é simplesmente uma função pura que recebe estado e ação e retorna um novo estado.

//Outro princípio fundamental no Redux é que stateé somente leitura, Em outras palavras, a reducerfunção deve sempre retornar uma nova cópia statee nunca modificar o estado diretamente.

/* 
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if(action.type === 'LOGIN'){
    return {
      login : true
    }
  }
  return state;
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
*/

//7 questao
//Use uma instrução switch para lidar com várias ações
//no caso de uma logim da loja, Você representa isso com um único objeto de estado com a propriedade authenticated. 
//Você também precisa de criadores de ação que criem ações correspondentes ao login e logout do usuário, juntamente com os próprios objetos de ação.

/* 
//ACTION
const defaultState = {
  authenticated: false
};

//REDUCE 
const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type){
    case "LOGIN" : {
      return {
        authenticated: true
      }
    }
    case "LOGOUT": {
      return {
        authenticated: false
      }
    }
    default :{
      return state;
    }
  }
  // Change code above this line
};

//STORE
const store = Redux.createStore(authReducer);

//ACTION CREATOR
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};
//ACTION CREATOR
const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
*/
//8 questao
//Uma prática comum ao trabalhar com o Redux é atribuir tipos de ação como constantes somente leitura e, em seguida, fazer referência a essas constantes onde quer que sejam usadas. 
/* 
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type : LOGIN
  }
};

const logoutUser = () => {
  return {
    type : LOGOUT
  }
};
*/

//9 questao
//Outro método ao qual você tem acesso no storeobjeto Redux é store.subscribe(), Isso permite que você assine funções de ouvinte para o armazenamento, que são chamadas sempre que uma ação é despachada para o armazenamento.
/* 
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
function incremento(){
  count = count + 1;
  return count;
}

store.subscribe(incremento());
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
*/

//10 questao
//Combine Múltiplos Redutores
//Você define vários redutores para lidar com diferentes partes do estado de seu aplicativo e, em seguida, compõe esses redutores juntos em um redutor raiz. O redutor raiz é então passado para o createStore()método Redux.
//isso segue o objetivo do redux, que é manter um unicon objeto de estado no store.

//Para nos permitir combinar vários redutores, o Redux fornece o combineReducers()método. 
//Normalmente, é uma boa prática criar um redutor para cada parte do estado do aplicativo quando eles são distintos ou exclusivos de alguma forma.
//um aplicativo de anotações com autenticação de usuário, um redutor pode manipular a autenticação enquanto outro manipula o texto e as anotações que o usuário está enviando. 
//ex 
/* 
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
*/
//Agora, a chave notesconterá todo o estado associado às nossas notas e manipulado por nosso arquivo notesReducer.

//no nosso exemplo vamos ter 2 reduces, um que controla o auth do app e outro que faz o incremento, então vamos combinar os dois e chamar de root reduce
/* 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
    count : counterReducer,
    auth : authReducer
})

const store = Redux.createStore(rootReducer);
*/

//11 questao
//Enviar dados de ação para a loja, Até agora você aprendeu como despachar ações para a loja Redux, mas até agora essas ações não continham nenhuma informação além de um arquivo type.
//Você também pode enviar dados específicos junto com suas ações. Na verdade, isso é muito comum porque as ações geralmente se originam de alguma interação do usuário e tendem a carregar alguns dados com elas.

/* 

------>> const de leituras
const ADD_NOTE = 'ADD_NOTE';

---->> reduce
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE : {
      state = action.text
      return state;
    }
    // Change code above this line
    default:
      return state;
  }
};
------>> action create + action sendo returnada
const addNoteText = (note) => {
  // Change code below this line
  return {
    type : ADD_NOTE,
    text : note
  }
  // Change code above this line
};

---->> store
const store = Redux.createStore(notesReducer);

---->> testes
console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
*/

//12 questao
//Use middleware para lidar com ações assíncronas
//Até agora, esses desafios evitaram discutir ações assíncronas, mas são uma parte inevitável do desenvolvimento web
//em algum momento, você precisará chamar endpoints assíncronos em seu aplicativo Redux, então como você lida com esses tipos de solicitações? 
//O Redux fornece um middleware projetado especificamente para essa finalidade, chamado de middleware Redux Thunk. Aqui está uma breve descrição de como usar isso com o Redux.
//Para incluir o middleware Redux Thunk, você o passa como um argumento para Redux.applyMiddleware(). Essa instrução é então fornecida como um segundo parâmetro opcional para a createStore()função.

/* 
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    store.dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      store.dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
*/

//13 questao
//revisao
/* 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT"; 

//reduce
const counterReducer = (state = 0, action) => {
  switch(action.type){
    case INCREMENT : {
      state = state + 1;
      return state;
    }
    case DECREMENT : {
      state = state - 1;
      return state; 
    }
    default : {
      return state;
    }
  }
}
//action increment
const incAction = () => {
  return {
    type : INCREMENT
  }
}
//decrement action
const decAction = () => {
  return {
    type : DECREMENT
  }
}
//store
const store = Redux.createStore(counterReducer);
*/

//14 questao
//Nunca Mute o Estado, Esses desafios finais descrevem vários métodos de impor o princípio fundamental da imutabilidade do estado no Redux.
//Estado imutável significa que você nunca modifica o estado diretamente, em vez disso, você retorna uma nova cópia do estado.
//.push() e .splice() modificam diretamente o array
//.concat() não modifica o array, apenas retorna um novo array
//.slice() não modifica o array, apenas retorna um novo array
//O operador spread […array] não modifica o array, mas apenas retorna um novo array

/* 
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
*/

//15 questao
//Use o Operador Spread em Arrays, 
//let newArray = [...myArray]; ---> newArrayagora é um clone de myArray. Ambas as matrizes ainda existem separadamente na memória.
//Se você executar uma mutação como newArray.push(5), myArraynão muda.

//16 questao
//Copiar um objeto com Object.assign
//const newObject = Object.assign({}, obj1, obj2);
//Isso cria newObject como um novo object, que contém as propriedades que existem atualmente em obj1 e obj2.
//imutavel object
/* 
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
*/
