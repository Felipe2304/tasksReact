import { useState } from "react";
import "./form.css";

export const Form = ({ createTask , testCreate }) => {
  const [inputValue, setValue] = useState("");

  const getInputValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        inputValue.length > 0 && createTask(inputValue);

        console.log(testCreate(inputValue))
        setValue("");
      }}
    >
      <div className="search-bar">
        <input
          value={inputValue}
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
