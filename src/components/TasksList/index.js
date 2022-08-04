import "./tasksList.css";
import trash from "../../assets/trash.svg";
import checked from "../../assets/checked.svg";

export const TasksList = () => {
  return (
    <ul className="list-tasks">
      <li className="task-item">
        <img src={trash} alt="ícone de lixeira" className="icon-trash" />
        <p className="task-text">Estudar React</p>
        <img src={checked} alt="ícone checked" className="icon-checked" />
      </li>
    </ul>
  );
};
