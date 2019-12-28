import { provide } from "utils/IoC";
import { action, computed, observable } from "mobx";
import { OrderType } from "./interface";
import { OrderOperation } from "../OrdersAndDeals/Orders/interface";
import { ISecurity } from "../Securities/interface";
import bind from "shared/decorators/bind";
import { inject } from "inversify";
import { API } from "utils/API";
import { PlaceOrderRequest } from "./dto/PlaceOrderRequest";
import { OrdersStore } from "../OrdersAndDeals/Orders/store";
import { PlaceOrderResponse } from "./dto/PlaceOrderResponse";
import { PortfolioStore } from "../Portfolio/store";
import { DealsStore } from "../OrdersAndDeals/Deals/store";
import { ModalStore } from "../../shared/Modal/store";

@provide.singleton()
export class NewOrderStore {
  @inject(API)
  api: API;

  @inject(OrdersStore)
  ordersStore: OrdersStore;

  @inject(DealsStore)
  dealsStore: DealsStore;

  @inject(PortfolioStore)
  portfolioStore: PortfolioStore;

  @inject(ModalStore)
  modalStore: ModalStore;

  @observable private _orderType: OrderType = OrderType.Market;
  @observable operation: OrderOperation = OrderOperation.Buy;
  @observable lots: number = 1;
  @observable lotPrice: number = 0;
  @observable security: ISecurity;

  @action
  init(security: ISecurity) {
    this.security = security;
    this.lotPrice = security.marketPrice;
  }

  @computed
  get orderType() {
    return this._orderType;
  }

  @action
  setOrderType(orderType: OrderType) {
    this._orderType = orderType;

    if (orderType === OrderType.Market) {
      this.lotPrice = this.security.marketPrice;
    }
  }

  @computed
  get orderPrice() {
    return this.lotPrice * this.lots;
  }

  @bind
  async placeOrder() {
    const response = await this.api.post<PlaceOrderRequest, PlaceOrderResponse>("/orders/place", {
      securityId: this.security.id,
      price: this.orderType === OrderType.Limit ? this.lotPrice : undefined,
      lots: this.lots,
      operation: this.operation,
    });

    this.modalStore.closeModal();

    if (response.executedQuantity > 0) {
      this.portfolioStore.fetchPortfolio();
      if (response.executedQuantity === response.lots) {
        this.dealsStore.fetchDeals();
      }
    }

    this.ordersStore.fetchOrders();
  }
}
