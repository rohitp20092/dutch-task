import React from "react";
import { ButtonProps } from "../utils/types";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = "button",
  onClick,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
