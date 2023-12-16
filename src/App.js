import "./App.css";
import { Head1 } from "./style/styledComp.js";

function App() {
  return (
    <>
      <Head1>Salam</Head1>
      <div>{process.env.NODE_ENV}</div>
    </>
  );
}

export default App;
