import { lazyInject, provide } from "utils/IoC";
import { action, observable } from "mobx";
import { API } from "utils/API";
import { InLoginDto } from "../dto/in.login.dto";
import { OutLoginDto } from "../dto/out.login.dto";

@provide.singleton()
export class AppStore {
  @observable userLoggedIn = false;

  @lazyInject(API)
  api: API;

  constructor() {
    this.tryLogin();
  }

  private async tryLogin() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        this.api.setAuthToken(token);
        await this.api.get('/user');
        this.userLoggedIn = true;
      } catch (e) {
        console.log(e);
      }
    }
  }

  @action.bound
  public async login(email: string, password: string) {
    const result = await this.api.post<InLoginDto, OutLoginDto>("/auth/login", { email, password });
    this.api.setAuthToken(result.token);
    localStorage.setItem('token', result.token);
    this.userLoggedIn = true;
  }
}
