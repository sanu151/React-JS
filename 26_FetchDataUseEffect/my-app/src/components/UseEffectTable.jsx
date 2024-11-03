import React from "react";

import style from "./useEffectFatch.module.css";

const UseEffectTable = (props) => {
  const { todo } = props;
  return (
    <tr className={style["table-row"]}>
      <td className={style["sr-no"]}>{todo.id}</td>
      <td className={style.desc}>{todo.title}</td>
      <td className={style.status}>
        {todo.completed ? "Completed" : "Pending"}
      </td>
    </tr>
  );
};

export default UseEffectTable;
