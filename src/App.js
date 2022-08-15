import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { NotTasks } from "./components/NotTasks";
import { ProgressBar } from "./components/ProgressBar";
import { TasksItem } from "./components/TasksItem";

const App = () => {
  const [listTasks, setListTasks] = useState([]);

  const storage = {
    set:(key , data)=>{
      const typeData = typeof data
      localStorage.setItem(key , typeData === 'object'? JSON.stringify(data) : data)
    },

    get:(key)=>{
      const data = localStorage.getItem(key)
      const isObject = data?.includes('{') || data?.includes('[')

      return isObject? JSON.parse(data):data
    },

    remove:(key)=> localStorage.removeItem(key)
  }

  const create = (taskText, completed = false) => {
    return  setListTasks([
      ...listTasks,
      { id: Math.random() * 999, title: taskText, completed: completed },
    ]);
  };
  const deleteTask = (id) => {
    const newListFiltered = listTasks.filter((task) => task.id !== id);
    setListTasks(newListFiltered);
  };

  const toggleTask = (id) => {
    const listCompleted = listTasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };

      return task;
    });

    setListTasks(listCompleted);
  };




  return (
    <div className="container-app">
      <div className="content">

      <Header />
      <Form createTask={create} />

      {!!listTasks.length && <ProgressBar listTasks={listTasks}  />}

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
