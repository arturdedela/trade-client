import { Security } from "../Securities/interface";

export interface Portfolio {
  portfolioValue: number;
  profit: number;
  securities: UserSecurity[];
}

export interface UserSecurity {
  security: Security;
  securityId: number;
  position: number;
  averagePrice: number;
}
