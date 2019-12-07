import React from "react";
import { Tab, TabsStyled } from "./style";
import { TabsProps } from "./interface";

function Tabs({ tabs }: TabsProps) {
  return (
    <TabsStyled>
      {tabs.map(({ active, onClick, text}) => (
        <Tab active={active} onClick={onClick}>{text}</Tab>
      ))}
    </TabsStyled>
  )
}

export default Tabs;
