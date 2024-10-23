import { useState } from "react";

const EventBubbling = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const parentClick = () => {
    setCount(count + 1);
  };
  const childClick = (event) => {
    event.stopPropagation();
    setCount1(count1 + 1);
  };

  return (
    <div>
      <div className="parent-class" onClick={parentClick}>
        <button className="child-class" onClick={childClick}>
          Child Element
        </button>
      </div>
      <div>
        <p>Count From Parent Div : {count}</p>
        <p>Count From Child Div : {count1}</p>
      </div>
    </div>
  );
};

export default EventBubbling;
