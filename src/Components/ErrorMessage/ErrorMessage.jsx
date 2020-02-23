import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ text }) => (
  <div>
    <h3>Something went wrong: {text}</h3>
    <p>Try again later</p>
  </div>
);

export default ErrorMessage;

ErrorMessage.defaultProps = {
  text: "Something went wrong! We are working on it. Try agaim later!"
};

ErrorMessage.propTypes = {
  text: PropTypes.string
};
