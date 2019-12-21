import styled, { keyframes } from "styled-components";
import ReactModal from 'react-modal';

const modalAnimation = keyframes`
  0% {
    transform: translate(-50%, -1500px);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`;

export const ReactModalStyled = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  background-color: #2b2b2c;
  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
  outline: none;
  animation: ${modalAnimation} 0.3s;  
`;
