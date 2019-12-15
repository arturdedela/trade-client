import styled from "styled-components";

export const SecurityStyled = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #212121;
  padding: 12px 8px 12px 12px;
  border-left: 3px solid #e56e17;
  cursor: pointer;
  
  :hover {
    background-color: #212121;
  }
  
  > :first-child {
    flex: 1;
  }
  
  > div:not(:first-child) {
    padding: 0 10px;
    text-align: right;
  }
`;

export const Price = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Ticker = styled(Price)`

`;

export const PriceChangePercent = styled(Price)<{ negative: boolean }>`
  color: ${({ negative }) => negative ? "#fe6762" : "#7ff0ba"};
`;

export const PriceChange = styled.p<{ negative: boolean }>`
  color: ${({ negative }) => negative ? "#fe6762" : "#7ff0ba"};
`;


