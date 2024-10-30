import React, { useState } from "react";
import ChildInput from "./ChildInput";
import ChildOutput from "./ChildOutput";

const Home = () => {
  const [data, setData] = useState([]);
  const addComment = (addData) => {
    setData((oldData) => {
      return [...oldData, addData];
    });
  };
  return (
    <div>
      <ChildInput onAddComment={addComment} />
      <ChildOutput data={data} />
    </div>
  );
};

export default Home;
