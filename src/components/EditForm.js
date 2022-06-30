import React, { useState, useEffect, useRef } from "react";
import { MdDownloadDone } from "react-icons/md";

function EditForm(props) {
  const [input, setInput] = useState(props.edit.value);

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

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
    <form className="todo-row-edit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Update your task"
        name="text"
        className="todo-input-edit"
        onChange={handleChange}
        ref={inputFocus}
      />
      <button className="todo-button-edit">
        <MdDownloadDone className="icons complete-icon" />
      </button>
    </form>
  );
}

export default EditForm;
