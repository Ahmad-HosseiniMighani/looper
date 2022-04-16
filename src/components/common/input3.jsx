import React from "react";

const Input3 = ({ name, label, error, extraClasses, ...rest }) => {
  return (
    <div className={`form-group ${extraClasses}`}>
      <div className="form-label-group">
        <input
          {...rest}
          name={name}
          id={name}
          className={error ? "form-control is-invalid" : "form-control"}
        />
        {label && <label htmlFor={name}>{label}</label>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default Input3;
