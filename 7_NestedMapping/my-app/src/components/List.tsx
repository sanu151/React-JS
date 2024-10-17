import React from "react";
import ListData from "./listData.json";

function List() {
  return ListData.map((data) => (
    <aside>
      <h3>Name : {data.fullName}</h3>
      <p>Age : {data.age}</p>
      <h4>Phone :</h4>
      <p>Gender : {data.gender}</p>
      {data.phone.map((ph) => (
        <div>
          <p>Home : {ph.home}</p>
          <p>Office : {ph.office}</p>
        </div>
      ))}
    </aside>
  ));
}

export default List;
