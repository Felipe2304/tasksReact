import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { NotTasks } from "./components/NotTasks";
import { TasksList } from "./components/TasksList";
import { ProgressBar } from "./components/ProgressBar";

const App = () => {
  return (
    <div className="container-app">
      <Header></Header>
      <Form></Form>

      <h4 className="task-all-text">Todas Tarefas</h4>

      <section className="task-box">
        <NotTasks></NotTasks>
        
      </section>
    </div>
  );
};

export default App;
