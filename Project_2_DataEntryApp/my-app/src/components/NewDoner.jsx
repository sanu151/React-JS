import React, { useState } from "react";

import style from "./CSS/newdoner.module.css";

const NewDoner = (props) => {
  const [data, setData] = useState({
    name: "",
    age: 0,
    phone: "",
    donation: 0,
    paidMetod: "",
  });
  const { name, age, phone, donation, paidMethod } = data;

  const handleChange = (e) => {
    const name = e.target.name;
    setData((oldData) => {
      return { ...oldData, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddDoner(data);
    setData({
      name: "",
      age: 0,
      phone: "",
      donation: 0,
      paidMetod: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style["form-group"]}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              id="age"
              onChange={handleChange}
              value={age}
            />
          </div>
          <div>
            <label htmlFor="phone">Contact No: </label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              onChange={handleChange}
              value={phone}
            />
          </div>
        </div>
        <div className={style["form-group"]}>
          <div>
            <label htmlFor="donation">Donation Amount: </label>
            <input
              type="number"
              name="donation"
              id="donation"
              required
              onChange={handleChange}
              value={donation}
            />
          </div>
          <div>
            <label htmlFor="paidMethod">Payment Method: </label>
            <input
              type="text"
              name="paidMethod"
              id="paidMethod"
              onChange={handleChange}
              value={paidMethod}
            />
          </div>
        </div>
        <div className={style["form-group"]}>
          <button type="submit" className={style.btn}>
            Add Doner
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewDoner;
