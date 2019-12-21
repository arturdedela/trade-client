import { PortfolioSecurity } from "../interface";

export interface PortfolioTableProps {
  securities: PortfolioSecurity[];
  onSecurityClick(security: PortfolioSecurity): void;
}
