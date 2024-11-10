import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState();
  const data = {
    name: "Supriyo Das",
    age: 37,
    gender: "Male",
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    if (userName.length == 1) {
      setUserId((Math.random() * 10) ^ 20);
    }
  }, [userName]);

  return (
    <>
      <h1>PropTypes</h1>
      <input type="text" onChange={handleChange} value={userName} />
      <Users userId={userId} userName={userName} data={data} />
    </>
  );
}

export default App;
