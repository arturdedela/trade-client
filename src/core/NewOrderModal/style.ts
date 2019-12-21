import styled from "styled-components";
import Tabs from "../../uikit/Tabs";
import Button from "../../uikit/Button";
import { OrderOperation } from "../OrdersAndDeals/Orders/interface";
import Radio from "../../uikit/Radio";

export const OrderModalStyled = styled.div`
  width: 440px;
`;

export const OrderModalHeader = styled.div<{ buy: boolean }>`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24);
  background-color: ${({ buy }) => buy ? "#013b1f" : "#3b0000"};
`;

export const SecurityInfoWrapper = styled.div`
  padding: 20px;
`;

export const Ticker = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;


export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  
  > * {
    margin-right: 5px;
  }
`;

export const Price = styled.div`
  font-size: 18px;
`;

export const TabsStyled = styled(Tabs)`
  > button {
    width: 100%;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  
  padding: 20px;
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-row-gap: 20px;
`;

export const OrderModalFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.24);
  text-align: right;
  padding: 20px;
`;

export const OrderButton = styled(Button)<{ buy: boolean }>`
  background-color: ${({ buy }) => buy ? "#149469" : "#f43a3a"};
`;

export const RadioStyled = styled(Radio)`
  margin: 20px 0;
`;
