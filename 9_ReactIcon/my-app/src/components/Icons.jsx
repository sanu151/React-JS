// import React from "react";
import {
  FaCanadianMapleLeaf,
  FaCircleArrowRight,
  FaCircleArrowLeft,
} from "react-icons/fa6";

const Icons = () => {
  return (
    <div>
      <h2>
        <FaCircleArrowRight className="heading2" />
        React Fontawsome Icons
        <FaCircleArrowLeft className="heading2" />
      </h2>
      <FaCanadianMapleLeaf className="icon" />
    </div>
  );
};

export default Icons;
