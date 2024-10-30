import React from "react";

const Doner = (props) => {
  const { name, age, phone, donation, paidMethod } = props.data;
  const { id } = props;

  const handleRemove = (id) => {
    props.onRemoveDoner(id);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{phone}</td>
      <td>{donation}</td>
      <td>{paidMethod}</td>
      <td>
        <i className="fa fa-trash fa-1x" onClick={() => handleRemove(id)}></i>
      </td>
    </tr>
  );
};

export default Doner;
