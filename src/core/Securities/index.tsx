import React, { useEffect } from "react";
import { SecuritiesHeader, SecuritiesStyled } from "./style";
import Security from "../Security";
import { useStore } from "../../utils/IoC";
import { SecuritiesStore } from "./store";
import { observer } from "mobx-react";

function Securities() {
  const store = useStore(SecuritiesStore);
  
  useEffect(() => {
    store.fetchSecurities();
  }, [store]);
  
  return (
    <SecuritiesStyled>
      <SecuritiesHeader>Stocks</SecuritiesHeader>
      {store.securities.map(security => <Security security={security} />)}
    </SecuritiesStyled>
  )
}

export default observer(Securities);
