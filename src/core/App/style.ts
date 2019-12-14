import styled from "styled-components";

export const AppStyled = styled.div`
  height: 100vh;
`;

export const AppLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
  "Securities Header"
  "Securities Content";
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5fr;
`;
