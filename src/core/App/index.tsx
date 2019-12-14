import React from "react";
import Portfolio from "core/Portfolio";
import Securities from "core/Securities";
import Header from "core/Header";
import { AppLayout, AppStyled, Content } from "./style";
import { GlobalStyle } from "./global.style";
import OrdersAndDeals from "../OrdersAndDeals";
import { useStore } from "utils/IoC";
import { AppStore } from "./AppStore";
import Auth from "../Auth";
import { observer } from "mobx-react";

function App() {
  const { userLoggedIn } = useStore(AppStore);

  return (
    <AppStyled>
      <GlobalStyle />
      {userLoggedIn ? (
        <AppLayout>
          <Securities />
          <Header />
          <Content>
            <OrdersAndDeals />
            <Portfolio />
          </Content>
        </AppLayout>
      ) : (
        <Auth />
      )}
    </AppStyled>
  );
}

export default observer(App);
