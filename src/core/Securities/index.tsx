import React, { useEffect } from "react";
import { SecuritiesHeader, SecuritiesStyled } from "./style";
import Security from "../Security";
import { useStore } from "utils/IoC";
import { SecuritiesStore } from "./store";
import { observer } from "mobx-react";

function Securities() {
  const store = useStore(SecuritiesStore);

  useEffect(() => {
    store.fetchSecurities();
    const interval = setInterval(store.fetchSecurities, 2000);
    return () => clearInterval(interval);
  }, [store]);

  return (
    <SecuritiesStyled>
      <SecuritiesHeader>Stocks</SecuritiesHeader>
      {store.securities.map(security => (
        <Security
          key={security.id}
          selected={security === store.selectedSecurity}
          security={security}
          onClick={() => store.selectSecurity(security)}
        />
      ))}
    </SecuritiesStyled>
  );
}

export default observer(Securities);
