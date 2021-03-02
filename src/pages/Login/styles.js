import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const LoginBox = styled.div`
  background-color: var(--white);
  border: 1px solid var(--gray);

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 40px;

    button {
      margin: 8px 0 42px 0;
    }
  }
`;

export const Logo = styled.div`
  margin: 22px auto 12px;

  img {
    width: 175px;
  }
`;

export const RegisterBox = styled.div`
  background-color: var(--white);
  border: 1px solid var(--gray);

  margin-top: 20px;
  padding: 20px;
  text-align: center;

  a {
    color: var(--blue);
    font-weight: bold;
  }
`;

export const Error = styled.span`
  margin-top: -32px;
  margin-bottom: 16px;
  font-size: 15px;
  color: red;
`;
