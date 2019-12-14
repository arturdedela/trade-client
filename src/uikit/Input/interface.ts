import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  className?: string;
  label?: string;
  onChange?(value: string, e: ChangeEvent<HTMLInputElement>): void;
}
