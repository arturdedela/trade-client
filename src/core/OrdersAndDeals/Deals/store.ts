import { inject } from "inversify";
import { API } from "utils/API";
import { Deal } from "./interface";
import { observable } from "mobx";
import { provide } from "utils/IoC";
import bind from "shared/decorators/bind";

@provide.singleton()
export class DealsStore {
  @inject(API)
  api: API;

  @observable orders: Deal[] = [];

  @bind
  async fetchDeals(): Promise<Deal[]> {
    this.orders = await this.api.get('/orders/deals');

    return this.orders;
  }
}
