import React, { useEffect, useState } from "react";
import { PriceChange } from "shared/PriceChange";
import { SecondaryText } from "uikit/SecondaryText";

import { OrderModalProps, OrderType } from "./interface";
import {
  ContentGrid,
  InputsWrapper,
  OrderButton,
  OrderModalFooter,
  OrderModalHeader,
  OrderModalStyled,
  Price,
  PriceWrapper,
  RadioStyled,
  SecurityInfoWrapper,
  TabsStyled,
  Ticker
} from "./style";
import { OrderOperation } from "../OrdersAndDeals/Orders/interface";
import Input from "uikit/Input";
import { observer } from "mobx-react";
import { useStore } from "utils/IoC";
import { NewOrderStore } from "./store";

function NewOrderModal({ security }: OrderModalProps) {
  const store = useStore(NewOrderStore);

  useEffect(() => {
    store.init(security);
  }, [security, store]);

  return (
    <OrderModalStyled>
      <OrderModalHeader buy={store.operation === OrderOperation.Buy}>
        <SecurityInfoWrapper>
          <Ticker>
            {security.ticker}{" "}
            <SecondaryText>- {security.fullName}</SecondaryText>
          </Ticker>
          <PriceWrapper>
            <Price>{security.marketPrice}</Price>
            <PriceChange negative={security.change < 0}>
              {security.change.toFixed(2)}
            </PriceChange>
            <PriceChange negative={security.changePercents < 0}>
              ({security.changePercents.toFixed(2)}%)
            </PriceChange>
          </PriceWrapper>
        </SecurityInfoWrapper>

        <TabsStyled
          tabs={[
            {
              text: OrderOperation.Buy,
              active: store.operation === OrderOperation.Buy,
              onClick: () => (store.operation = OrderOperation.Buy)
            },
            {
              text: OrderOperation.Sell,
              active: store.operation === OrderOperation.Sell,
              onClick: () => (store.operation = OrderOperation.Sell)
            }
          ]}
        />
      </OrderModalHeader>

      <ContentGrid>
        <InputsWrapper>
          <Input
            label="Lots"
            type="number"
            value={store.lots}
            onChange={lots => (store.lots = Number(lots))}
          />
          <Input
            label="Execution price"
            type="number"
            disabled={store.orderType === OrderType.Market}
            value={store.lotPrice}
            onChange={lotPrice => (store.lotPrice = Number(lotPrice))}
          />
        </InputsWrapper>

        <div>
          <SecondaryText>Order type</SecondaryText>
          <RadioStyled
            label="Market"
            checked={store.orderType === OrderType.Market}
            onClick={() => store.setOrderType(OrderType.Market)}
          />
          <RadioStyled
            label="Limit"
            checked={store.orderType === OrderType.Limit}
            onClick={() => store.setOrderType(OrderType.Limit)}
          />
        </div>
      </ContentGrid>

      <OrderModalFooter>
        <OrderButton buy={store.operation === OrderOperation.Buy} onClick={store.placeOrder}>
          NEW ORDER ~{store.orderPrice}
        </OrderButton>
      </OrderModalFooter>
    </OrderModalStyled>
  );
}

export default observer(NewOrderModal);
