import "./progressBar.css";

export const ProgressBar = ({listTasks}) => {
  const tasksCompleted = ()=>{
    return listTasks.filter((item)=> {return item.completed  })
  }
  const percentage = `${Math.round((100 / listTasks.length) * tasksCompleted().length)}%`

  return (
    <div className="progress-bar-wrapper">
      <div className="info-progress">
        <span className="info-progress-text text">Concluídos</span>
        <strong className="info-progress-number text">{`${tasksCompleted().length}/${listTasks.length}`}</strong>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{width:percentage}}></div>
      </div>
    </div>
  );
};
