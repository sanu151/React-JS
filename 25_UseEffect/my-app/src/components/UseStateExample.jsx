import React, { useEffect, useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("UseEffect");
  }, [count]);

  return (
    <div>
      <div>
        {console.log("Render")}
        <h1>Count : {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setIsLoading(!isLoading)}>isLoading</button>
      </div>
    </div>
  );
};

export default UseStateExample;
