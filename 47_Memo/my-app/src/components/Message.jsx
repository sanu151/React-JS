import { memo } from "react";
import PropTypes from "prop-types";

const Message = ({ numberOfMessage }) => {
  console.log("Message Rendering");
  return (
    <div>
      <h3>Send {numberOfMessage} Message</h3>
    </div>
  );
};
Message.propTypes = {
  numberOfMessage: PropTypes.number,
};

export default memo(Message);
