import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const number = useMemo(() => {
    let num = 0;
    for (let index = 0; index < 5000000000; index++) {
      num++;
    }
    return num;
  }, []);

  return (
    <>
      <h1>Count : {count}</h1>
      <h2>Number : {number}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </>
  );
}

export default App;
