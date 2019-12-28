export interface PlaceOrderResponse {
  id: number;
  securityId: number;
  operation: string;
  lots: number;
  price: number;
  date: string;
  executedQuantity: number;
  cancelled: boolean;
}
