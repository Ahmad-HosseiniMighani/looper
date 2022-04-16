import React from "react";

const TextArea = ({ name, label, error, extraClasses, ...rest }) => {
  return (
    <React.Fragment>
        <label for={name} className="publisher-label">{label}</label>
        <div className="publisher-input">
            <textarea
                {...rest}
                name={name}
                id={name}
                className={extraClasses}
            />
        </div>
    </React.Fragment>
  );
};
export default TextArea;
