import styled from "styled-components";

export const OperationStyled = styled.span<{ sell: boolean }>`
  border-radius: 2px;
  padding: 3px 8px;
  background-color: ${({ sell }) => sell ? "#f43a3a" : "#149469"};
  color: #fff;
`;
