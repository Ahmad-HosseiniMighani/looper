import React from "react";

const RadioInput = ({ id, label, value, currentvalue, ...rest }) => {
  return (
    <div className="custom-control custom-radio custom-control-inline">
      <input
        {...rest}
        type="radio"
        id={id}
        value={value}
        checked={currentvalue === value}
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
