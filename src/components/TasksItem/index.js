import "./taskItem.css";
import trash from "../../assets/trash.svg";
import checked from "../../assets/checked.svg";

export const TasksItem = ({
  title,
  positionItem,
  deletedItem,
  toggle,
  completedTask,
}) => {
  return (
    <li
      className="task-item"
      onClick={() => {
        toggle(positionItem);
      }}
    >
      <img
        src={trash}
        alt="ícone de lixeira"
        className="icon-trash"
        onClick={() => {
          deletedItem(positionItem);
        }}
      />
      <p className="task-text">{title}</p>
      {/* <img src={checked} alt="ícone checked" className="icon-checked" /> */}
    </li>
  );
};
