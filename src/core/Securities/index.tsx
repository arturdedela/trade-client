import React from "react";
import { SecuritiesStyled } from "./style";
import Security from "../Security";

const security = {
  ticker: "AMD",
  price: 25.63000,
  changePercents: -0.16,
  lastDealDate: "6:50 PM",
  priceChange: -0.1050
};

function Securities() {
  return (
    <SecuritiesStyled>
      <Security security={security} />
      <Security security={security} />
      <Security security={security} />
      <Security security={security} />
    </SecuritiesStyled>
  )
}

export default Securities;
