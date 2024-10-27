import React, { useState } from "react";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

import style from "./home.module.css";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((oldTodo) => {
      return [...oldTodo, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((oldTodo) => {
      const filteredTodo = oldTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };

  return (
    <div className={style.container}>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
