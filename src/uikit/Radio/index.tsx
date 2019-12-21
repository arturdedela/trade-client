import React from "react";
import { RadioProps } from "./interface";
import { RadioButton, RadioStyled } from "./style";

function Radio({ checked, label, onClick, className }: RadioProps) {

  return (
    <RadioStyled onClick={onClick} className={className}>
      <RadioButton checked={checked} />
      <span>{label}</span>
    </RadioStyled>
  )
}

export default Radio;
