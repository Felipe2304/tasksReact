import { useState } from "react";
import "./form.css";

export const Form = () => {
  const [valueInput, setValue] = useState("");

  const getInputValue = (event) => {
    setValue(event.target.value);
  };
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setValue("");
      }}
    >
      <div className="search-bar">
        <input
          value={valueInput}
          onChange={getInputValue}
          type="text"
          placeholder="Digite uma tarefa"
          className="input-search"
        />
        <button className="button button-add">{"ADD"}</button>
      </div>
    </form>
  );
};
