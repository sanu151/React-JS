import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactTostify = () => {
  const handleAddTodo = () => {
    toast("New Todo Added");
  };
  const handleDeleteTodo = () => {
    toast("Todo is Deleted");
  };
  return (
    <div>
      <button onClick={handleAddTodo}>Add New Todo</button>
      <button onClick={handleDeleteTodo}>Delete Todo</button>
      <ToastContainer />
    </div>
  );
};

export default ReactTostify;
