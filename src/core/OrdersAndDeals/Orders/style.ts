import styled from "styled-components";

export const TableStyled = styled.div`
`;

export const TableRow = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #212121;
  
  > :not(:first-child) {
    flex: 1;
  }
  
  > :not(:first-child) {
    text-align: right;
  }
`;

