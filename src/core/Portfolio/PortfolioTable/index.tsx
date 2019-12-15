import React from "react";
import { Profit, TableRow, TableStyled } from "./style";
import { SecondaryText } from "../../../uikit/SecondaryText";
import { PortfolioTableProps } from "./interface";

function PortfolioTable({ securities }: PortfolioTableProps) {
  return (
    <TableStyled>
      <TableRow>
        <SecondaryText>Ticker</SecondaryText>
        <SecondaryText>Position</SecondaryText>
        <SecondaryText>Rate</SecondaryText>
        <SecondaryText>Equity</SecondaryText>
        <SecondaryText>Average</SecondaryText>
        <SecondaryText>Profit</SecondaryText>
      </TableRow>
      {securities.map(({ ticker, position, marketPrice, equity, averagePrice, profit }) => (
        <TableRow>
          <div>{ticker}</div>
          <div>{position}</div>
          <div>{marketPrice}</div>
          <div>{equity.toFixed(2)}</div>
          <div>{averagePrice}</div>
          <Profit negative={profit < 0}>{profit.toFixed(2)}</Profit>
        </TableRow>
      ))}
    </TableStyled>
  )
}

export default PortfolioTable;
