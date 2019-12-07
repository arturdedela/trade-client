import React from "react";
import { ExchangeStatus, HeaderStyled, SelectedSecurity, UserIcon } from "./style";
import Button from "uikit/Button";
import { SecondaryText } from "uikit/SecondaryText";
import dayjs from "dayjs";
import { ReactComponent as UserSvg } from "./user.svg";

const security = {
  ticker: "AMD",
  price: 25.63000,
  changePercents: -0.16,
  lastDealDate: "6:50 PM",
  priceChange: -0.1050
};

function Header() {
  return (
    <HeaderStyled>
      <SelectedSecurity security={security} />
      <Button>ЗАЯВКА</Button>
      <div>
        <SecondaryText>Москва {dayjs().format("DD.MM.YYYY, mm:HH")}</SecondaryText>
        <SecondaryText>Статус биржи: <ExchangeStatus open={false}>закрыта</ExchangeStatus></SecondaryText>
      </div>
      <UserIcon>
        <UserSvg />
      </UserIcon>
    </HeaderStyled>
  )
}

export default Header;
