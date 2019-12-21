import styled from "styled-components";

export const PriceChange = styled.p<{ negative: boolean }>`
  color: ${({ negative }) => negative ? "#fe6762" : "#7ff0ba"};
`;
