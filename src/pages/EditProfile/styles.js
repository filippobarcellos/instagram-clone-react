import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 975px;
  margin: 90px auto;
  background: var(--white);
  border: 1px solid var(--gray);
  border-radius: 4px;

  > div {
    max-width: 60%;
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;

  h2 {
    margin-left: 16px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    label {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      input {
        margin-top: 8px;
        width: 100%;
      }
    }
  }

  button {
    margin-top: 24px;
    align-self: flex-end;
  }
`;
