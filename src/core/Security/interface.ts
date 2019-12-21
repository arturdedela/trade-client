import { ISecurity } from "../Securities/interface";

export interface SecurityProps {
  security: ISecurity;
  className?: string;
  onClick?(): void;
  selected?: boolean;
}
