export interface Portfolio {
  portfolioValue: number;
  profit: number;
  securities: PortfolioSecurity[];
}

export interface PortfolioSecurity {
  ticker: string;
  position: number;
  marketPrice: number;
  equity: number;
  averagePrice: number;
  profit: number;
}
