import PropTypes from "prop-types";
import style from "./CSS/user.module.css";

const User = (props) => {
  const { id, name, username, email, address, phone, website, company } =
    props.user;
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;

  const handleRemoveUser = (id) => {
    props.onRemoveUser(id);
  };

  return (
    <article>
      <div className={style.card}>
        <p className={style.userId}>
          {id}_{username}
        </p>
        <h2>{name}</h2>
        <address>
          <p>
            {suite}, {street}
          </p>
          <p>
            {city}, {zipcode}
          </p>
          <p>
            {lat} - {lng}
          </p>
        </address>
        <h4>Email : {email}</h4>
        <h4>Contact Number: {phone}</h4>
        <p>
          Website: <a href={website}>{website}</a>
        </p>
        <h5>
          Company: {company.name} <span>({company.bs})</span>
        </h5>
      </div>
      <button className={style.btnRemove} onClick={() => handleRemoveUser(id)}>
        Remove User
      </button>
    </article>
  );
};

User.propTypes = {
  user: PropTypes.object,
  onRemoveUser: PropTypes.func,
};

export default User;
