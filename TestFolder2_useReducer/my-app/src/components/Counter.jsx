import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h2>Counter : {state.count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement} disabled={state.count === 0}>
        -
      </button>
    </div>
  );
};

export default Counter;
