import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement} disabled={count === 6 ? true : false}>
        Increse
      </button>
      <button onClick={handleDecrement} disabled={count === 0 ? true : false}>
        Decrese
      </button>
    </div>
  );
}

export default UseState;
