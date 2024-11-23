import { useState } from "react";
import { UserContext } from "./UserContext";
import PropTypes from "prop-types";

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Supriyo Das" },
    { id: 2, name: "Rupa Das" },
  ]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.any,
};

export default UserProvider;
