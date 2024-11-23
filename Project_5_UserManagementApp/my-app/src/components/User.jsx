import PropTypes from "prop-types";

import useUserContext from "../HOOKS/useUserContext";

const User = ({ user }) => {
  const { users, setUsers } = useUserContext();
  const { id, name } = user;
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <div className="card">
      <h3>{id}</h3>
      <h2>{name}</h2>
      <button onClick={() => handleDelete(id)}>Delete User</button>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};

export default User;
