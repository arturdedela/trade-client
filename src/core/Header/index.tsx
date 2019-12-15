import React from "react";
import { ExchangeStatus, HeaderStyled, SelectedSecurity, UserIcon } from "./style";
import Button from "uikit/Button";
import { SecondaryText } from "uikit/SecondaryText";
import dayjs from "dayjs";
import { ReactComponent as UserSvg } from "./user.svg";
import { Security } from "../Securities/interface";

const security: Security = {
  ticker: "AMD",
  marketPrice: 25.63000,
  changePercents: -0.16,
  change: -0.1050,
  fullName: "Advanced Micro Devices",
  id: 1,
  marketCap: 12312,
  openPrice: 24,
  quantity: 23123,
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
