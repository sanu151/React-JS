import React, { useState } from "react";

import style from "./newtodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-group"]}>
        <label htmlFor="title">Tilte : </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-group"]}>
        <label htmlFor="desc">Description : </label>
        <textarea
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={style["form-group"]}>
        <button className={style.btn} type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
