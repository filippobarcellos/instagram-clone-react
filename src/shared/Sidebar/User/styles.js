import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 10px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    strong {
      color: var(--textStrong);
    }

    span {
      color: var(--textGray);
    }
  }
`;
