import React, { useState } from "react";

import style from "./faq.module.css";

const Faq = ({ answer, id, question }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={style.card}>
      <div className={style.questionDiv}>
        <h4>
          {id}: {question}
        </h4>
        <button onClick={() => setToggle(!toggle)} className={style.btn}>
          {toggle ? "-" : "+"}
        </button>
      </div>
      <div>{toggle && <p>{answer}</p>}</div>
    </article>
  );
};

export default Faq;
