import React from "react";
import { ButtonStyled } from "./style";
import { ButtonProps } from "./interface";

function Button({ children, ...buttonProps }: ButtonProps) {
  return (
    <ButtonStyled {...buttonProps}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
