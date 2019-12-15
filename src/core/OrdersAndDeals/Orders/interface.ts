
export interface Order {
  ticker: string;
  operation: OrderOperation;
  lots: number;
  price?: number;
  executedQuantity: number;
  status: OrderStatus;
}

export enum OrderStatus {
  Cancelled = 'Cancelled',
  Executed = 'Executed',
  Pending = 'Pending',
}

export enum OrderOperation {
  Buy = 'BUY',
  Sell = 'SELL',
}
