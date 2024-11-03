import React, { useEffect, useState } from "react";

import UseEffectTable from "./UseEffectTable";

const UseEffectFatch = () => {
  const loadingMessage = <p>Data is fatching... Please wait.</p>;

  const [todos, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("Data fatching unsuccessful..");
        }
        return res.json();
      })
      .then((data) => {
        setTodo(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const todoElement =
    todos &&
    todos.map((todo) => {
      return <UseEffectTable key={todo.id} todo={todo} />;
    });

  return (
    <div>
      {isLoading ? (
        loadingMessage
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th className="sr-no">Sr No.</th>
              <th className="desc">Description</th>
              <th className="status">Status</th>
            </tr>
          </thead>
          <tbody>{todoElement}</tbody>
        </table>
      )}
    </div>
  );
};

export default UseEffectFatch;
