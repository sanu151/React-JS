// import React from 'react'
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Protected = ({ isLoggedin, children }) => {
  if (!isLoggedin) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
Protected.propTypes = {
  isLoggedin: PropTypes.bool,
  children: PropTypes.any,
};

export default Protected;
