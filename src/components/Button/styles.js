import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: 4px;
  padding: 12px;
  color: var(--white);

  &:disabled {
    opacity: 0.5;
  }
`;
