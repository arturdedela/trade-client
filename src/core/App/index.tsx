import React from "react";
import Portfolio from "core/Portfolio";
import Securities from "core/Securities";
import Header from "core/Header";
import { AppStyled, Content } from "./style";
import { GlobalStyle } from "./global.style";
import OrdersAndDeals from "../OrdersAndDeals";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Securities />
      <Header />
      <Content>
        <OrdersAndDeals />
        <Portfolio />
      </Content>
    </AppStyled>
  );
}

export default App;
