import { provide } from "utils/IoC";
import { inject } from "inversify";
import { API } from "utils/API";
import { Portfolio } from "./interface";
import { observable } from "mobx";
import bind from "shared/decorators/bind";

@provide.singleton()
export class PortfolioStore {
  @inject(API)
  api: API;

  @observable portfolio: Portfolio = {
    portfolioValue: 0,
    profit: 0,
    securities: [],
  };

  @bind
  async fetchPortfolio(): Promise<Portfolio> {
    this.portfolio = await this.api.get("/portfolio");

    return this.portfolio;
  }
}
