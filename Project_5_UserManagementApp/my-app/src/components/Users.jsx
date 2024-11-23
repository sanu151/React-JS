import User from "./User";

import useUserContext from "../HOOKS/useUserContext";

const Users = () => {
  const { users } = useUserContext();
  return (
    <div className="card-container">
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
