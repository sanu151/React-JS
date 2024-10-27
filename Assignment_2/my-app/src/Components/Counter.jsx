import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h2 className="card-heading">Counter : {count}</h2>
      <div>
        <button
          className="increment-btn"
          onClick={handleIncrement}
          disabled={count === 5 ? true : false}
        >
          +
        </button>
        <button
          className="decrement-btn"
          onClick={handleDecrement}
          disabled={count === -5 ? true : false}
        >
          -
        </button>
        <button
          className="reset-btn"
          onClick={handleReset}
          disabled={count === 0 ? true : false}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
