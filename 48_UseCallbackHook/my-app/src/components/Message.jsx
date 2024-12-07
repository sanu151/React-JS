import { memo } from "react";
import PropTypes from "prop-types";

const Message = ({ numberOfMessage, onHandleDecrement }) => {
  console.log("Message Rendering");
  return (
    <div>
      <h3>Send {numberOfMessage} Message</h3>
      <button onClick={onHandleDecrement}>Decrement</button>
    </div>
  );
};
Message.propTypes = {
  numberOfMessage: PropTypes.number,
  onHandleDecrement: PropTypes.func,
};

export default memo(Message);
