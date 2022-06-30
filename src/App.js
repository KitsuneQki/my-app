import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <TodoList />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
