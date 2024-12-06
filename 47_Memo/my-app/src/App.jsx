import { useState } from "react";
import "./App.css";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
  console.log("App Rendering");
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Message numberOfMessage={count} />
    </>
  );
}

export default App;
