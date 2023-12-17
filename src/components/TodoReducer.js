import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SEND_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };

    default:
      return {
        todo: "error",
      };
  }
}

function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });

  function handle(e) {
    e.preventDefault();

    dispatch({ type: "ADD_TODO", todo: state.todo });
    // console.log(state, dispatch);
  }

  function onChange(e) {
    dispatch({ type: "SEND_TODO", value: e.target.value });
  }

  return (
    <div>
      <h1>Todo Reducer</h1>
      <input type="text" value={state.todo} onChange={onChange} />
      <button type="button" onClick={handle}>
        add todo
      </button>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}1</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducer;
