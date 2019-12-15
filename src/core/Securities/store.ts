import { inject } from "inversify";
import { API } from "utils/API";
import { Security } from "./interface";
import { provide } from "utils/IoC";
import { observable } from "mobx";

@provide.singleton()
export class SecuritiesStore {
  @inject(API)
  api: API;

  @observable securities: Security[] = [];

  async fetchSecurities(): Promise<Security[]> {
    this.securities = await this.api.get('/securities');

    return this.securities;
  }
}
