import React from "react";
import { Profit, TableRow, TableStyled } from "./style";
import { SecondaryText } from "../../../uikit/SecondaryText";
import { PortfolioTableProps } from "./interface";

function PortfolioTable({ securities, onSecurityClick }: PortfolioTableProps) {
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
      {securities.map(security => (
        <TableRow onClick={() => onSecurityClick(security)}>
          <div>{security.ticker}</div>
          <div>{security.position}</div>
          <div>{security.marketPrice}</div>
          <div>{security.equity.toFixed(2)}</div>
          <div>{security.averagePrice}</div>
          <Profit negative={security.profit < 0}>{security.profit.toFixed(2)}</Profit>
        </TableRow>
      ))}
    </TableStyled>
  )
}

export default PortfolioTable;
