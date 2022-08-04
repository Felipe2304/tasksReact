import "./form.css";

export const Form = () => {
  return (
    <form className="form">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          className="input-search"
        />
        <button className="button button-add">{"ADD"}</button>
      </div>
    </form>
  );
};
