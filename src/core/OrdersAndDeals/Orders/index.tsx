import React, { useEffect } from "react";
import { TableRow, TableStyled } from "./style";
import { SecondaryText } from "uikit/SecondaryText";
import { useStore } from "utils/IoC";
import { OrdersStore } from "./store";
import { observer } from "mobx-react";
import Operation from "uikit/Operation";

// TODO: Cancel order
function Orders() {
  const store = useStore(OrdersStore);

  useEffect(() => {
    store.fetchOrders();
  }, [store]);

  return (
    <TableStyled>
      <TableRow>
        <SecondaryText>Ticker</SecondaryText>
        <SecondaryText>Operation</SecondaryText>
        <SecondaryText>Lots</SecondaryText>
        <SecondaryText>Price</SecondaryText>
        <SecondaryText>Executed quantity</SecondaryText>
        <SecondaryText>Status</SecondaryText>
      </TableRow>
      {store.orders.map(({ ticker, price, lots, operation, status, executedQuantity }) => (
        <TableRow>
          <div>{ticker}</div>
          <div><Operation operation={operation} /></div>
          <div>{lots}</div>
          <div>{price ? price.toFixed(2) : 'Market'}</div>
          <div>{executedQuantity}</div>
          <div>{status}</div>
        </TableRow>
      ))}
    </TableStyled>
  )
}

export default observer(Orders);
