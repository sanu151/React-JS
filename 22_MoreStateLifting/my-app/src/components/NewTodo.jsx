import React from "react";

const NewTodo = (props) => {
  const data = "NewTodo Data From Child(NewTodo.jsx) to Parent(App.jsx)";
  props.onHandleChildData(data);
  return (
    <div>
      <h3>New Todo</h3>
    </div>
  );
};

export default NewTodo;
