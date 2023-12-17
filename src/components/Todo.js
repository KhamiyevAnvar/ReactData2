import React, { useState } from "react";
import "../css/tailwind.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  function handle(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <>
      <div className="p-5">
        <h1>Todo App</h1>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          id="first_name"
        />
        <button onClick={handle}>click</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
