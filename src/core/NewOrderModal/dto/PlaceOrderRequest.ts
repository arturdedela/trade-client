import { OrderOperation } from "../../OrdersAndDeals/Orders/interface";

export interface PlaceOrderRequest {
  securityId: number,
  operation: OrderOperation,
  price?: number,
  lots: number;
}
