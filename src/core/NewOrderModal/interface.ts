import { ISecurity } from "../Securities/interface";

export interface OrderModalProps {
  security: ISecurity;
}

export enum OrderType {
  Market,
  Limit
}
