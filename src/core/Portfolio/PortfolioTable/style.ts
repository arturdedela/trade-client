import styled from "styled-components";

export const TableStyled = styled.div`
`;
// TODO: Make shared
export const TableRow = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #212121;
  
  :not(:first-child):hover {
    background-color: #212121;
    cursor: pointer;
  }
  
  > :not(:first-child) {
    flex: 1;
  }
  
  > :not(:first-child) {
    text-align: right;
  }
`;

export const Profit = styled.div<{ negative: boolean }>`
  color: ${({negative}) => negative ? "#fe6762" : "#7ff0ba"};
`;
