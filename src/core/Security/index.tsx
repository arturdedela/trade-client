import React from "react";
import { Price, PriceChange, PriceChangePercent, SecurityStyled, Ticker } from "./style";
import { SecurityProps } from "./interface";
import { SecondaryText } from "uikit/SecondaryText";

function Security({ security, className }: SecurityProps) {
  const { priceChange, changePercents, lastDealDate, price, ticker } = security;

  return (
    <SecurityStyled className={className}>
      <Ticker>{ticker}</Ticker>
      <div>
        <Price>{price}</Price>
        <SecondaryText>{lastDealDate}</SecondaryText>
      </div>
      <div>
        <PriceChangePercent negative={priceChange < 0}>{changePercents}%</PriceChangePercent>
        <PriceChange negative={priceChange < 0}>{priceChange}</PriceChange>
      </div>
    </SecurityStyled>
  )
}

export default Security;
