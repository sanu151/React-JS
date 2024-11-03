import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

const todosData = [];
function App() {
  const [todos, setTodos] = useState(todosData);

  // get the newTodo from NewTodo.js here inside this function
  const handleAddTodo = (todo) => {
    setTodos((oldTodo) => {
      return [...oldTodo, todo];
    });
  };
  return (
    <>
      <div>
        <NewTodo onHandleAddTodo={handleAddTodo} />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
