import styled from "styled-components";

export const AuthStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthWrapper = styled.div`
  width: 360px;
  padding: 32px 32px 48px;
  background-color: #2b2b2c;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export const FormStyled = styled.form`
  padding: 0 20px;
  
  > button {
    width: 100%;
  }
  
  > div {
    margin-bottom: 20px;
  }
`;

export const AuthTitle = styled.h1`
  margin-bottom: 35px;
`;
