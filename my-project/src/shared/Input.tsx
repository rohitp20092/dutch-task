import React from "react";
import { InputProps } from "../utils/types";

const Input = ({
  name,
  id,
  className,
  type = "text",
  placeholder,
}: InputProps) => {
  return (
    <input
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      className={className}
    />
  );
};

export default Input;
