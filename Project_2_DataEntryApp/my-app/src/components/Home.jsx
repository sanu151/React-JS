import React, { useState } from "react";
import Doners from "./Doners";
import { v4 as uuidv4 } from "uuid";

import style from "./CSS/home.module.css";
import NewDoner from "./NewDoner";

const Home = () => {
  const [datas, setData] = useState([]);

  const addDoner = (data) => {
    setData((oldData) => {
      return [...oldData, { id: uuidv4(), data }];
    });
  };

  const removeDoner = (id) => {
    setData((oldData) => {
      const filteredData = oldData.filter((data) => data.id !== id);
      return filteredData;
    });
  };

  return (
    <div>
      <h1 className={style["heading-text"]}>Donation Data Entry</h1>
      <div className={style.container}>
        <NewDoner onAddDoner={addDoner} />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Contact No</th>
              <th>Donation Amount</th>
              <th>Payment Method</th>
              <th>Delete Row</th>
            </tr>
          </thead>
          <Doners datas={datas} onRemoveDoner={removeDoner} />
        </table>
      </div>
    </div>
  );
};

export default Home;
