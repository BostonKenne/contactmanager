import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  onChange,
  type,
  placeholder,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <div className="invalid-feedback"> {error} </div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text"
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
export default TextInputGroup;
