import React from "react";
import ChildOutputList from "./ChildOutputList";

const ChildOutput = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((myData, index) => (
        <ChildOutputList data={myData} key={index} />
      ))}
    </div>
  );
};

export default ChildOutput;
