import React from "react";
import { Tab, TabsStyled } from "./style";
import { TabsProps } from "./interface";

function Tabs({ tabs, className }: TabsProps) {
  return (
    <TabsStyled className={className}>
      {tabs.map(({ active, onClick, text}) => (
        <Tab key={text} active={active} onClick={onClick}>{text}</Tab>
      ))}
    </TabsStyled>
  )
}

export default Tabs;
