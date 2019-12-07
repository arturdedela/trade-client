
export interface ISecurity {
  ticker: string;
  price: number;
  priceChange: number;
  changePercents: number;
  lastDealDate: string;
}

export interface SecurityProps {
  security: ISecurity;
  className?: string;
}
