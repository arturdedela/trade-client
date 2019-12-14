import React, { ChangeEvent } from "react";
import { InputStyled, InputWrapper, Label } from "./style";
import { InputProps } from "./interface";

function Input({ label, onChange, className, ...inputProps }: InputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }

  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputStyled onChange={handleChange} {...inputProps} />
    </InputWrapper>
  )
}

export default Input;
