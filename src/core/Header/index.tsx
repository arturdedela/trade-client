import React, { useCallback } from "react";
import {
  ExchangeStatus,
  HeaderStyled,
  SelectedSecurity,
  UserIcon
} from "./style";
import Button from "uikit/Button";
import { SecondaryText } from "uikit/SecondaryText";
import dayjs from "dayjs";
import { ReactComponent as UserSvg } from "./user.svg";
import { observer } from "mobx-react";
import { useStore } from "utils/IoC";
import { ModalStore } from "shared/Modal/store";
import NewOrderModal from "../NewOrderModal";
import { SecuritiesStore } from "../Securities/store";

function Header() {
  const { openModal } = useStore(ModalStore);
  const { selectedSecurity } = useStore(SecuritiesStore);

  const handleOrderClick = useCallback(() => {
    openModal(NewOrderModal, { security: selectedSecurity! });
  }, [openModal, selectedSecurity]);

  return (
    <HeaderStyled>
      {selectedSecurity && (
        <>
          <SelectedSecurity security={selectedSecurity} />
          <Button onClick={handleOrderClick}>NEW ORDER</Button>
        </>
      )}
      <div>
        <SecondaryText>
          Moscow {dayjs().format("DD.MM.YYYY, HH:mm")}
        </SecondaryText>
        <br />
        <SecondaryText>
          Exchange status: <ExchangeStatus open={false}>closed</ExchangeStatus>
        </SecondaryText>
      </div>
      <UserIcon>
        <UserSvg />
      </UserIcon>
    </HeaderStyled>
  );
}

export default observer(Header);
