import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { NotTasks } from "./components/NotTasks";
import { ProgressBar } from "./components/ProgressBar";
import { TasksItem } from "./components/TasksItem";

const App = () => {
  const [listTasks ,  setListTasks] = useState([])

  const create = (taskText, completed = false)=>{
    return setListTasks([...listTasks , {title:taskText , completed: completed}])
  }

  const read = () =>{
    return [...listTasks]
  }

  const deleted = (position)=>{
    const newListFiltered = listTasks.filter((_tasks , index)=>{
      return index !== position 
    }) 
    setListTasks(newListFiltered)
  }
  
  const toggleCompleted =(position)=>{
    const listCompleted = listTasks.map((tasks , index)=>{
      return index === position ?  {title:tasks.title , completed:tasks.completed ? false:true } :tasks
        
    })

    setListTasks(listCompleted)

  } 

  return (
    <div className="container-app">
      <Header></Header>
      <Form createTask={create}></Form>

      {listTasks.length > 0 && <ProgressBar></ProgressBar>}

      <h4 className="task-all-text">Todas Tarefas</h4>

      <section className="task-box">

        {listTasks.length > 0 ? <ul className="list-tasks">{listTasks.map((tasks , index)=>{
          return <TasksItem 
          key={tasks.title} 
          title={tasks.title} 
          completedTask={tasks.completed} 
          positionItem={index}
          deletedItem={deleted}
          toggle={toggleCompleted}
          >
          </TasksItem>
          
        })}</ul> 
        : <NotTasks></NotTasks>} 
        
      </section>
    </div>
  );
};

export default App;
