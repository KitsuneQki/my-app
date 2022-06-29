import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
