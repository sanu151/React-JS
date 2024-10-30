import React from "react";
import Doner from "./Doner";

const Doners = (props) => {
  const { datas } = props;
  return (
    <tbody>
      {datas.map((data) => (
        <Doner
          data={data.data}
          key={data.id}
          id={data.id}
          onRemoveDoner={props.onRemoveDoner}
        />
      ))}
    </tbody>
  );
};

export default Doners;
