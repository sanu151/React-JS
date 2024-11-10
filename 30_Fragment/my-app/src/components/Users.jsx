import PropTypes from "prop-types";

import User from "./User";

const Users = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

Users.propTypes = {
  data: PropTypes.array,
};

export default Users;
