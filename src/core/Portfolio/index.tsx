import React, { useEffect } from "react";
import { PortfolioValueWrapper, PortfolioId, PortfolioStyled, PortfolioValue, PortfolioValueChange } from "./style";
import Tabs from "uikit/Tabs";
import { ReactComponent as WalletSvg } from "./wallet.svg";
import { SecondaryText } from "uikit/SecondaryText";
import { useStore } from "utils/IoC";
import { PortfolioStore } from "./store";
import { observer } from "mobx-react";
import { formatMoney } from "../../utils/formatMoney";
import PortfolioTable from "./PortfolioTable";

function Portfolio() {
  const store = useStore(PortfolioStore);

  useEffect(() => {
    store.fetchPortfolio();
  }, [store]);

  const { portfolioValue, profit, securities } = store.portfolio;

  return (
    <PortfolioStyled>
      <PortfolioId><WalletSvg /> 129381924812</PortfolioId>
      <Tabs tabs={[{ text: "Portfolio", active: true }]} />
      <PortfolioValueWrapper>
        <div>
          <PortfolioValue>{formatMoney(portfolioValue)}</PortfolioValue>
          <SecondaryText>Portfolio value</SecondaryText>
        </div>
        <div>
          <PortfolioValueChange negative={profit < 0}>{formatMoney(profit)}</PortfolioValueChange>
          <SecondaryText>Total P/L</SecondaryText>
        </div>
      </PortfolioValueWrapper>

      <PortfolioTable securities={securities} />
    </PortfolioStyled>
  )
}

export default observer(Portfolio);
