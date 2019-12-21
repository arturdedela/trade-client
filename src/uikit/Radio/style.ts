import styled, { css } from "styled-components";

export const RadioStyled = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  position: relative;
  border: 2px solid #e56e17;
  border-radius: 50%;
  margin-right: 10px;
  
  ${({ checked }) => checked && css`
    :after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #e56e17;
    }
  `};  
`;
