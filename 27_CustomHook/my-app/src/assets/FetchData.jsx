import React from "react";

import useFetch from "./useFetch";

const FetchData = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const loadingMessage = <p>Data is Loading... Please wait.</p>;
  const errorMessage = <p>{error}</p>;
  console.log(data);
  return (
    <div>
      <h2>Fetching data</h2>
      {isLoading
        ? loadingMessage
        : error
        ? errorMessage
        : data &&
          data.map((dataElement) => {
            return (
              <div key={dataElement.id}>
                <h3>{dataElement.title}</h3>
                <p>{dataElement.body}</p>
              </div>
            );
          })}
    </div>
  );
};

export default FetchData;
