import React from "react";

const Input2 = ({ name, label, error, extraClasses, ...rest }) => {
  return (
      <input
        {...rest}
        name={name}
        id={name}
        className={extraClasses}
      />
  );
};

export default Input2;
