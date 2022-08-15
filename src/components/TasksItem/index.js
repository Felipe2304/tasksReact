import "./taskItem.css";
import trash from "../../assets/trash.svg";
import checked from "../../assets/checked.svg";

export const TasksItem = ({ title, id, deleteTask, toggleTask, completed }) => {
  const handleDelete = (event) => {
    event.stopPropagation();
    deleteTask(id);
  };
  
  return (
    <li className="task-item" onClick={() => toggleTask(id)}>
      <img
        src={trash}
        alt="ícone de lixeira"
        className="icon-trash"
        onClick={handleDelete}
      />
      <p className="task-text">{title}</p>
      {completed && (
        <img src={checked} alt="ícone checked" className="icon-checked" />
      )}
    </li>
  );
};
