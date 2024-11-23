import { useState } from "react";

import useUserContext from "../HOOKS/useUserContext";

const NewUser = () => {
  const [newUser, setNewUser] = useState("");
  const { setUsers } = useUserContext();

  const handleNewChange = (e) => setNewUser(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = { id: new Date().getTime().toString(), name: newUser };
    setUsers((prevUsers) => [...prevUsers, userName]);
    setNewUser("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={newUser}
          onChange={handleNewChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
