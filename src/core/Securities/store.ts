import { inject } from "inversify";
import { API } from "utils/API";
import { ISecurity } from "./interface";
import { provide } from "utils/IoC";
import { action, observable } from "mobx";
import { PortfolioSecurity } from "../Portfolio/interface";

@provide.singleton()
export class SecuritiesStore {
  @inject(API)
  api: API;

  @observable securities: ISecurity[] = [];
  @observable selectedSecurity?: ISecurity;

  @action
  async fetchSecurities(): Promise<ISecurity[]> {
    this.securities = await this.api.get('/securities');

    return this.securities;
  }

  @action.bound
  selectSecurity(security: ISecurity) {
    this.selectedSecurity = security;
  }

  @action.bound
  selectSecurityFromPortfolio(security: PortfolioSecurity) {
    this.selectedSecurity = this.securities.find(({ ticker }) => ticker === security.ticker);
  }
}
