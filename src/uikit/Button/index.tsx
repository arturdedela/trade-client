import React from "react";
import { ButtonStyled } from "./style";
import { ButtonProps } from "./interface";

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
