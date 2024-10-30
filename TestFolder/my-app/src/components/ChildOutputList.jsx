import React from "react";

const ChildOutputList = (props) => {
  const { name, comment } = props.data;
  return (
    <div>
      <h3>Author : {name}</h3>
      <p>Comment : {comment}</p>
    </div>
  );
};

export default ChildOutputList;
