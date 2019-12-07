import styled, { css } from "styled-components";

export const TabsStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #212121;
`;

export const Tab = styled.button<{ active: boolean }>`
  height: 40px;
  width: 115px;
  outline: none;
  border: none;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
  
  background-color: transparent;
  color: #7d8083;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  ${({ active }) => active && css`
    border-bottom-color: #e56e17;
    color: #e56e17;
  `};
`;
