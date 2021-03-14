import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  overflow: hidden;
`;

export const Content = styled.div`
  background: white;
  border-radius: 4px;
  margin: auto;
  justify-self: center;
`;
