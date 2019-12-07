import React, { useState } from "react";
import { OrdersAndDealsStyled } from "./style";
import Tabs from "uikit/Tabs";

function OrdersAndDeals() {
  const [activeTab, setActiveTab] = useState<"orders" | "deals">("orders");

  return (
    <OrdersAndDealsStyled>
      <Tabs tabs={[
        { text: "Заявки", active: activeTab === "orders", onClick: () => setActiveTab("orders")},
        { text: "Сделки", active: activeTab === "deals", onClick: () => setActiveTab("deals")}
      ]} />
    </OrdersAndDealsStyled>
  )
}

export default OrdersAndDeals;
