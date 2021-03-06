import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  border: 1px solid var(--gray);
  border-radius: 4px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.noBorder &&
    css`
      border: 0;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: none;
    background: none;
    padding: 12px;
  }
`;
