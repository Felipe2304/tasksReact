import "./notTasks.css";
import emptyImage from "../../assets/empty.svg";

export const NotTasks = () => {
  return (
    <div className="not-tasks">
      <img src={emptyImage} alt="imagem ilustrativa de lista vazia" />
      <p className="info-text">Não há tarefas cadastradas ainda</p>

      <button className="button button-register" onClick={() => {}}>
        Cadastrar uma tarefa agora
      </button>
    </div>
  );
};
