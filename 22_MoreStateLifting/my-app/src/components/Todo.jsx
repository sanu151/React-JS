import React from "react";

const Todo = (props) => {
  const { title } = props;
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
export default Todo;
