// import React from "react";

const Child = (props) => {
  const data1 = "Child : I am from Child Element";
  props.onParent(data1);

  return (
    <div>
      <h2>This is Child Component</h2>
      <h3>{props.data}</h3>
    </div>
  );
};

export default Child;
