import { inject } from "inversify";
import { API } from "utils/API";
import { Order } from "./interface";
import { observable } from "mobx";
import { provide } from "utils/IoC";
import bind from "shared/decorators/bind";

@provide.singleton()
export class OrdersStore {
  @inject(API)
  api: API;

  @observable orders: Order[] = [];

  @bind
  async fetchOrders(): Promise<Order[]> {
    this.orders = await this.api.get('/orders');

    return this.orders;
  }
}
