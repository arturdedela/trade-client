import styled from "styled-components";

export const PortfolioStyled = styled.div`
  position: relative;
  background-color: #2b2b2c;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin: 20px 20px 0;
  padding-top: 16px;
`;

export const PortfolioId = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 12px;
  > svg {
    margin-right: 16px;
  }
`;

export const PortfolioValueWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 10px;
  display: flex;
  
  > div {
    padding: 0 16px;
    text-align: right;
    
    :first-child {
      border-right: 1px solid #212121;
    }
  }
`;

export const PortfolioValue = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const PortfolioValueChange = styled(PortfolioValue)<{ negative: boolean }>`
  color: ${({ negative }) => negative ? "#fe6762" : "#7ff0ba"};
`;
