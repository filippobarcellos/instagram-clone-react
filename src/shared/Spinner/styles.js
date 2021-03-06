import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: transparent;
  border-top: 2px solid var(--blue);
  border-right: 2px solid var(--blue);
  border-bottom: 2px solid var(--blue);
  border-left: 4px solid var(--white);
  animation: ${rotate360} 1s linear infinite;
`;
