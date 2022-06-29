import React, { useState } from "react";
import { MdDownloadDone } from "react-icons/md";

function EditForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-row" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Edit Todo"
        name="text"
        className="todo-input-edit"
        onChange={handleChange}
      />
      <button className="todo-button-edit">
        <MdDownloadDone className="icons complete-icon" />
      </button>
    </form>
  );
}

export default EditForm;
