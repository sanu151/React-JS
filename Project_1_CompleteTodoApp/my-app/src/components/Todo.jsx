import React from "react";

import style from "./todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleDelete = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <article className={style.todo}>
      <div className={style["todo-data"]}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div
        className={style["delete-icon"]}
        onClick={() => {
          handleDelete(id);
        }}
      >
        <i className="fa fa-trash fa-2x"></i>
      </div>
    </article>
  );
};

export default Todo;
