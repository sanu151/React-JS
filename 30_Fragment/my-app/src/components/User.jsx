import PropTypes from "prop-types";

const User = (props) => {
  const { id, name, username, email, address, phone, website, company } =
    props.user;
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        {suite}, {street}, {city},<br />
        Zipcode: {zipcode} <br /> Latitude: {lat}, Longitude: {lng}
      </td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>
        {company.name} - {company.catchPhrase}
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object,
  id: PropTypes.number,
};

export default User;
