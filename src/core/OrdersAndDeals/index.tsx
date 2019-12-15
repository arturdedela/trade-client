import React, { useState } from "react";
import { OrdersAndDealsStyled } from "./style";
import Tabs from "uikit/Tabs";
import Orders from "./Orders";
import Deals from "./Deals";

function OrdersAndDeals() {
  const [activeTab, setActiveTab] = useState<"orders" | "deals">("orders");

  return (
    <OrdersAndDealsStyled>
      <Tabs tabs={[
        { text: "Orders", active: activeTab === "orders", onClick: () => setActiveTab("orders")},
        { text: "Deals", active: activeTab === "deals", onClick: () => setActiveTab("deals")}
      ]} />
      {activeTab === "orders" && <Orders />}
      {activeTab === "deals" && <Deals />}
    </OrdersAndDealsStyled>
  )
}

export default OrdersAndDeals;
