import React from "react";

const Button = ({ text, padx, pady, active, onclick, customclass }) => {
  return (
    <button
      className={`${
        active ? "bg-tango-600" : "bg-transparent border border-tango-600"
      } px-${padx} py-${pady} ${customclass}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
