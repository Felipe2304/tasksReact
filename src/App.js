import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { NotTasks } from "./components/NotTasks";
import { ProgressBar } from "./components/ProgressBar";
import { TasksItem } from "./components/TasksItem";

const getTasks = ()=>{
  const tasksString = localStorage.getItem('task')
  if(!tasksString) return []
  return JSON.parse(tasksString)
}
const App = () => {
  const [listTasks, setListTasks] = useState(getTasks());

  const create = (taskText, completed = false) => {
    const newTask = {
      id: Math.random() * 999,
      title: taskText,
      completed: completed,
    };
    const newTaskList = [...listTasks, newTask];
    setListTasks(newTaskList);
    localStorage.setItem('task', JSON.stringify(newTaskList))
  };

  const deleteTask = (id) => {

    const newListFiltered = listTasks.filter((task) => task.id !== id);
    setListTasks(newListFiltered);
    localStorage.setItem('task' , JSON.stringify(newListFiltered))
  };

  const toggleTask = (id) => {
    const listCompleted = listTasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };

      return task;
    });

    setListTasks(listCompleted);
    localStorage.setItem('task', JSON.stringify(listCompleted))
  };

  return (
    <div className="container-app">
      <div className="content">
        <Header />
        <Form createTask={create} />

        {!!listTasks.length && <ProgressBar listTasks={listTasks} />}

        <h4 className="task-all-text">Todas Tarefas</h4>

        <section className="task-box">
          {!listTasks.length && <NotTasks />}
          {!!listTasks.length && (
            <ul className="list-tasks">
              {listTasks.map((task) => {
                return (
                  <TasksItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                  />
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
