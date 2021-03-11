import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 975px;
  margin: 90px auto;
  background: var(--white);
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding: 64px;

  > div {
    h2 {
      margin-bottom: 32px;
    }

    input {
      margin-bottom: 32px;
    }
  }
`;
