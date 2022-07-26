import "./App.css";
import { useState } from "react";
import Logo from "../src/assets/logo.svg"
import emptyImage from "../src/assets/empty.svg"
import trash from "../src/assets/trash.svg"
import checked from "../src/assets/checked.svg"

const App = () => {
  const [buttonAdd, setButtonAdd] = useState("ADD");

  const focusInput = ()=>{
    console.log('focar')
  }
  return (
    <div className="container-app">
      <header className="header">
        <div className="logo-title">
          <img src={Logo} className="logo"></img>
          <h1 className="title">tasks</h1>
        </div>
      </header>

      <form className="form">
      <div className="search-bar">
        <input type="text" placeholder="Digite uma tarefa" className="input-search"/>
        <button className="button button-add">{buttonAdd}</button>
      </div>
      </form>

      {/* <div className="progress-bar-wrapper">
        <div className="info-progress">
          <span className="info-progress-text text">Concluídos</span>
          <strong className="info-progress-number text">1/4</strong>
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div> */}

      <h4 className="task-all-text">Todas Tarefas</h4>

      <section className="task-box">
        {/* <ul className="list-tasks">
          <li className="task-item">
            <img src={trash} alt="ícone de lixeira"  className="icon-trash"/>
            <p className="task-text">Estudar React</p>
            <img src={checked} alt="ícone checked" className="icon-checked"/>
          </li>
          
        </ul> */}

        <div className="task-box-register">
          <img src={emptyImage} alt="imagem ilustrativa de lista vazia" />
          <p className="info-text">Não há tarefas cadastradas ainda</p>

          <button className="button button-register" onClick={()=>{

          }}>Cadastrar uma tarefa agora</button>
        </div>
      </section>
    </div>
  );
};

export default App;
