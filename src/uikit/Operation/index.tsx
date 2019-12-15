import React from "react";
import { OperationStyled } from "./style";
import { OperationProps } from "./interface";
import { OrderOperation } from "../../core/OrdersAndDeals/Orders/interface";

function Operation({ operation }: OperationProps) {
  return (
    <OperationStyled sell={operation === OrderOperation.Sell}>{operation}</OperationStyled>
  )
}

export default Operation;
