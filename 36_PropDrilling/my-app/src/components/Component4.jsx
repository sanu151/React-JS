import PropTypes from "prop-types";

const Component4 = ({ data }) => {
  const { id, name } = data;
  return (
    <div>
      <h2>Component 4: Using Prop Data</h2>
      <h3>ID := {id}</h3>
      <h3>Name := {name}</h3>
    </div>
  );
};
Component4.propTypes = {
  data: PropTypes.object,
};

export default Component4;
