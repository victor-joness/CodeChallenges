import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [listTodoAux,setListTodoAux] = useState([]);

  const [desc, setDesc] = useState("");
  const [check, setCheck] = useState(false);
  const [todoID, setTodoID] = useState(0);

  const [editDesc, setEditDesc] = useState("");
  const [editID, setEditID] = useState(null);
  
  const [pesquisarText, setPesquisarText] = useState("");

  const handleSubmit = () => {
    if(listTodo.length > 6){
      return;
    }

    if (!desc) {
      return;
    }

    const todo = {
      desc: desc,
      check: check,
      todoID: todoID,
    };
    setListTodo([...listTodo, todo]);
    setListTodoAux([...listTodo, todo]);
    setDesc("");
    setTodoID(todoID + 1);
  };

  const handleDelete = (event) => {
    const idTodo = event.target.getAttribute("id");
    const novoTodoList = listTodo.filter((e) => e.todoID != idTodo);
    setListTodo(novoTodoList);
  };

  const handleUpdateContainer = (event) => {
    const idTodo = event.target.getAttribute("id");

    const tarefa = document.querySelector("#tarefa");
    tarefa.classList.add("edit-hidden");

    const edit = document.querySelector("#edit-form");
    edit.classList.add("hide-on");

    setEditID(idTodo);
  };

  const handleUpdate = () => {
      listTodo.map((e) => {
        if(e.todoID == editID){
          e.desc = editDesc;
          console.log("tetsde")
        }
      });

      setListTodo([...listTodo]);
      setEditDesc("");
      setEditID(null);

      const tarefa = document.querySelector("#tarefa");
      tarefa.classList.remove("edit-hidden");

      const edit = document.querySelector("#edit-form");
      edit.classList.remove("hide-on");
  };

  const handleFinish = (event) => {
    const idTodo = event.target.getAttribute("id");

    listTodo.map((e) => {
      if (e.todoID == idTodo) {
        e.check = !e.check;
      }
    });

    setListTodo([...listTodo]);
  };

  const filter = (value = "all") => {
    if(value == "done"){
      const res = listTodo.filter((e) => (e.check));
      setListTodoAux([...res]);
    }else if(value == "todo"){
      const res = listTodo.filter((e) => (!e.check));
      setListTodoAux([...res]);
    }else if(value == "all"){
      setListTodoAux([...listTodo]);
    }
    return setListTodoAux;
  };

  const pesquisar = () => {
    const res = listTodoAux.filter((j) => ((j.desc.includes(pesquisarText))))
    setListTodoAux([...res]);

    
    if(pesquisarText == ""){
      setListTodoAux([...listTodo]);  
    }
  };

  return (
    <div className="container">
      <div className="container-secundario">
        <h1>Todo Avançado</h1>
        <div className="tarefa" id="tarefa">
          <h2>Adicione sua Tarefa</h2>
          <div className="tarefa-add">
            <input
              type="text"
              placeholder="O que você vai fazer ?"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button onClick={handleSubmit}>
              <i className="fa-thin fa-plus"></i>
            </button>
          </div>
        </div>

        <div id="edit-form" className="hide">
          <h2>Edite sua tarefa</h2>
          <div className="form-control">
            <input type="text" id="edit-input" placeholder="Nova Descrição" value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
            <button type="submit" onClick={handleUpdate}>
              <i className="fa-solid fa-check-double"></i>
            </button>
            <button id="cancel-edit-btn">Cancelar</button>
          </div>
          
        </div>

        <div className="pesquisa-filtro">
          <div className="pesquisa" id="pesquisar">
            <h2>Pesquisar:</h2>
            <div className="pesquisa-add">
              <input type="text" placeholder="Buscar..." value={pesquisarText} onChange={(e) => {setPesquisarText(e.target.value)}}/>
              <button onClick={pesquisar}>
              <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <div className="filtro" id="filter">
            <h2>Filtrar:</h2>
            <div className="filtro-add">
              <select id="filter-select" onChange={(e) => {filter(e.target.value)}}>
                <option value="all">Todos</option>
                <option value="done">Feitos</option>
                <option value="todo">A fazer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="todo-list">
          {listTodoAux &&
            listTodoAux.map((e) => (
              <div className="todo" key={e.todoID}>
                {e.check ? (
                  <h2 className="finish">{e.desc}</h2>
                ) : (
                  <h2 className="normal">{e.desc}</h2>
                )}
                <div className="buttons">
                  <button
                    className="finish-todo"
                    id={e.todoID}
                    onClick={handleFinish}
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button
                    className="edit-todo"
                    id={e.todoID}
                    onClick={handleUpdateContainer}
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    className="remove-todo"
                    id={e.todoID}
                    onClick={handleDelete}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
