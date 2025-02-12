import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 text-white  ${style}`}
    >
      {label}
    </button>
  );
};
export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.string,
};

Button.defaultProps = {
  style: "",
};

