import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    console.log(state, action);
    return {
      age: state.age + 1,
    };
  }
  //   throw Error("Unknown action.");
}

function TestReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
          console.log(state, dispatch.type);
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

export default TestReducer;
