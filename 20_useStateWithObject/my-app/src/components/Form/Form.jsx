import { useState } from "react";
import style from "./form.module.css";

const Form = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    console.log(`Name : ${name}, Email : ${email}, Password : ${password}`);
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={name}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="passsword">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
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
