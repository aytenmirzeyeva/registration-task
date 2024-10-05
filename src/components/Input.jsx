import React from "react";

const Input = ({ type, placeholder, id, onChange, value, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
