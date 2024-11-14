import Component4 from "./Component4";
import PropTypes from "prop-types";

const Component3 = ({ data }) => {
  return (
    <div>
      <h2>Component 3: PropData Passing Through</h2>
      <Component4 data={data} />
    </div>
  );
};
Component3.propTypes = {
  data: PropTypes.object,
};

export default Component3;
