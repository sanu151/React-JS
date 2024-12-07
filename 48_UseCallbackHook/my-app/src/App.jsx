import { useCallback, useState } from "react";

import "./App.css";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("App Rendering");
  const handleDecrementMessage = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  return (
    <>
      {toggle ? "On" : "Off"}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Message
        numberOfMessage={count}
        onHandleDecrement={handleDecrementMessage}
      />
    </>
  );
}

export default App;
