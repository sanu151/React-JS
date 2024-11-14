import Component2 from "./Component2";
import PropTypes from "prop-types";

const Component1 = ({ data }) => {
  return (
    <div>
      <h2>Compnent 1: PropData Passing Through </h2>
      <Component2 data={data} />
    </div>
  );
};

Component1.propTypes = {
  data: PropTypes.object,
};

export default Component1;
