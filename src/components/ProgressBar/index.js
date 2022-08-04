import "./progressBar.css";

export const ProgressBar = () => {
  return (
    <div className="progress-bar-wrapper">
      <div className="info-progress">
        <span className="info-progress-text text">Concluídos</span>
        <strong className="info-progress-number text">1/4</strong>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};
