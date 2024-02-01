import React from "react";

function Input({ label, id,error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        // onChange={(e) => handleInput("email", e)}
        // onBlur={(e) => handleInputBlur("email", e)}
        //value={enteredValues.email}
        {...props}
        id={id}
        // type="email"
        //name={name}
      />
      <div className="control-error">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Input;
