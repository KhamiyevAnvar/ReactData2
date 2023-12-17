import "./App.css";

import { Head1 } from "./style/styledComp.js";
// import Tailwind from "./style/Tailwind.js";
import Todo from "./components/Todo.js";
import TodoReducer from "./components/TodoReducer.js";
// import TestReducer from "./components/TestReducer.js";

function App() {
  return (
    <>
      <Head1>Salam</Head1>
      <div>{process.env.NODE_ENV}</div>
      {/* <Tailwind /> */}
      <Todo />
      <TodoReducer />
      {/* <TestReducer /> */}
    </>
  );
}

export default App;
