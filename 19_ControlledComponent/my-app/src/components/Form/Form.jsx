import { useState } from "react";
import style from "./form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleNameChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
