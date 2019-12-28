import React, { useEffect } from "react";
import { TableRow, TableStyled } from "./style";
import { SecondaryText } from "uikit/SecondaryText";
import { useStore } from "utils/IoC";
import { DealsStore } from "./store";
import { observer } from "mobx-react";
import dayjs from "dayjs";
import Operation from "uikit/Operation";

function Deals() {
  const store = useStore(DealsStore);

  useEffect(() => {
    store.fetchDeals();
    const interval = setInterval(store.fetchDeals, 2000);
    return () => clearInterval(interval);
  }, [store]);

  function formatTime(t: string) {
    const time = dayjs(t);
    const today = dayjs().startOf("day");

    if (time.isBefore(today)) {
      return time.format("DD.MM.YYYY HH:mm");
    }

    return time.format("HH:mm");
  }

  return (
    <TableStyled>
      <TableRow>
        <SecondaryText>Ticker</SecondaryText>
        <SecondaryText>Time</SecondaryText>
        <SecondaryText>Price</SecondaryText>
        <SecondaryText>Lots</SecondaryText>
        <SecondaryText>Operation</SecondaryText>
      </TableRow>
      {store.orders.map(({ ticker, price, lots, operation, time }, i) => (
        <TableRow key={i}>
          <div>{ticker}</div>
          <div>{formatTime(time)}</div>
          <div>{price ? Number(price).toFixed(2) : 'Market'}</div>
          <div>{lots}</div>
          <div><Operation operation={operation} /></div>
        </TableRow>
      ))}
    </TableStyled>
  )
}

export default observer(Deals);
