import styled from "styled-components";
import Security from "../Security";

export const HeaderStyled = styled.header`
  grid-area: Header;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 8px 0 20px;

  background-color: #2b2b2c;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
    
  > :not(:last-child) {
    margin-right: 20px;
  }
`;

export const SelectedSecurity = styled(Security)`
  border: none;
  height: 48px;
  width: 380px;
  border-radius: 4px;
  background-color: rgba(125, 128, 131, 0.08);
  padding-left: 20px;
  
  :hover {
    background-color: rgba(125,128,131,0.16);
  }
`;

export const ExchangeStatus = styled.span<{ open: boolean }>`
  color: ${({ open }) => open ? "#7ff0ba" : "#fe6762"};
`;

export const UserIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: auto;
  cursor: pointer;
  
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
