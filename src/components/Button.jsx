import React from "react";

const Button = ({ btnText, disabled, onClick, type }) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type}>
      {btnText}
    </button>
  );
};

export default Button;
