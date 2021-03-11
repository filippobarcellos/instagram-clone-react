import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;

  & + label {
    margin-top: 8px;
  }

  div {
    flex: 1;
  }

  input {
    flex: 3;
    padding: 12px;
    background: var(--background);
    border: 1px solid var(--gray);
    border-radius: 4px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: var(--background);
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding: 12px;

  & + input {
    margin-top: 8px;
  }
`;
