import Component3 from "./Component3";
import PropTypes from "prop-types";

const Component2 = ({ data }) => {
  return (
    <div>
      <h2>Component 2: PropData Passing Through</h2>
      <Component3 data={data} />
    </div>
  );
};
Component2.propTypes = {
  data: PropTypes.object,
};

export default Component2;
