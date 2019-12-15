import React from "react";
import {
  Price,
  PriceChange,
  PriceChangePercent,
  SecurityStyled,
  Ticker
} from "./style";
import { SecurityProps } from "./interface";
import { SecondaryText } from "uikit/SecondaryText";

function Security({ security, className }: SecurityProps) {
  const { ticker, marketPrice, changePercents, change, fullName } = security;

  return (
    <SecurityStyled className={className}>
      <div>
        <Ticker>{ticker}</Ticker>
        <SecondaryText>{fullName}</SecondaryText>
      </div>
      <div>
        <Price>{marketPrice}</Price>
        {/*<SecondaryText></SecondaryText>*/}
      </div>
      <div>
        <PriceChangePercent negative={changePercents < 0}>
          {changePercents.toPrecision(2)}%
        </PriceChangePercent>
        <PriceChange negative={change < 0}>{change.toPrecision(4)}</PriceChange>
      </div>
    </SecurityStyled>
  );
}

export default Security;
