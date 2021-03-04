import styled, { css } from 'styled-components';

const buttonVariations = {
  secondary: css`
    background: none;
    color: var(--blue);
    font-weight: bold;
  `,
  primary: css`
    background-color: var(--blue);
    border-radius: 4px;
    padding: 12px;
    color: var(--white);
  `,
};

export const Button = styled.button`
  border: none;
  ${(props) => buttonVariations[props.variant]}

  &:disabled {
    opacity: 0.5;
  }
`;
