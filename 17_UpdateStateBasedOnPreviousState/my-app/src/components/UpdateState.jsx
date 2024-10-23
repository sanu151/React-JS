import { useState } from "react";

function UpdateState() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increse</button>
    </div>
  );
}

export default UpdateState;
