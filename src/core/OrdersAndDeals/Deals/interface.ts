import { OrderOperation } from "../Orders/interface";

export interface Deal {
  ticker: string;
  time: string;
  price?: number;
  lots: number;
  operation: OrderOperation;
}
