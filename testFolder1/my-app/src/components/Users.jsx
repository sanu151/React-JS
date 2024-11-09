import User from "./User";
import PropTypes from "prop-types";
import style from "./CSS/users.module.css";

const Users = (props) => {
  const { users } = props;
  return (
    <div className={style.cardContainer}>
      {users.map((user) => {
        return (
          <User key={user.id} user={user} onRemoveUser={props.onRemoveUser} />
        );
      })}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  onRemoveUser: PropTypes.func,
};

export default Users;
