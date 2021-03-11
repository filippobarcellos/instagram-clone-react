import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border-top: 1px solid var(--gray);

  form {
    display: flex;
    align-items: center;
    width: 100%;

    input {
      flex: 1;
      background: none;
    }
  }
`;
