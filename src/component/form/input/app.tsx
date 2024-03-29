/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./app.css"; // Assuming the CSS file is named app.css

interface InputProps {
  placeholder: string;
  icon?: string;
  value: any;
  onChange: any;
  type: any;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  value,
  onChange,
  type,
}) => {
  return (
    <div className="input-container">
      {icon && <img src={icon} className="icon" alt="" />}
      <input
        placeholder={placeholder}
        value={value}
        className="input-field"
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
