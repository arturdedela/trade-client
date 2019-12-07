import React from "react";
import { PortfolioValueWrapper, PortfolioId, PortfolioStyled, PortfolioValue, PortfolioValueChange } from "./style";
import Tabs from "uikit/Tabs";
import { ReactComponent as WalletSvg } from "./wallet.svg";
import { SecondaryText } from "uikit/SecondaryText";

function Portfolio() {
  const portfolioChange = -2523;

  return (
    <PortfolioStyled>
      <PortfolioId><WalletSvg /> 129381924812</PortfolioId>
      <Tabs tabs={[{ text: "Портфель", active: true }]} />
      <PortfolioValueWrapper>
        <div>
          <PortfolioValue>265945</PortfolioValue>
          <SecondaryText>Оценка портфеля</SecondaryText>
        </div>
        <div>
          <PortfolioValueChange negative={portfolioChange < 0}>{portfolioChange}</PortfolioValueChange>
          <SecondaryText>Прибыль</SecondaryText>
        </div>
      </PortfolioValueWrapper>
    </PortfolioStyled>
  )
}

export default Portfolio;
