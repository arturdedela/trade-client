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

function Security({ security, className, onClick, selected }: SecurityProps) {
  const { ticker, marketPrice, changePercents, change, fullName } = security;

  return (
    <SecurityStyled className={className} onClick={onClick} selected={selected}>
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
          {changePercents.toFixed(2)}%
        </PriceChangePercent>
        <PriceChange negative={change < 0}>{change.toFixed(4)}</PriceChange>
      </div>
    </SecurityStyled>
  );
}

export default Security;
