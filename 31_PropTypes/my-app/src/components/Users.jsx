import PropTypes from "prop-types";

const Users = (props) => {
  const { name, age, gender } = props.data;
  return (
    <div>
      <h3>{props.userId}</h3>
      <h2>{props.userName}</h2>
      <p>
        {name} - {age} - {gender}
      </p>
    </div>
  );
};

Users.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
  }),
};

export default Users;
