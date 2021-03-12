import styled from 'styled-components';

export const Profile = styled.div`
  width: 90%;
  max-width: 736px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  align-items: center;

  img {
    width: 100%;
    border-radius: 50%;
  }

  @media (min-width: 730px) {
    width: 100%;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileInfoHeader = styled.header`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h2 {
    color: var(--textStrong);
    font-weight: 300;
    font-size: 2.8rem;
    margin-right: 16px;
  }

  button {
    padding: 8px;
    font-size: 12px;

    @media (min-width: 730px) {
      font-size: 16px;
    }
  }
`;

export const ProfileInfoStats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  color: var(--textStrong);
  font-size: 1.6rem;

  div {
    & + div {
      margin-left: 24px;
    }

    strong {
      margin-right: 4px;
    }
  }
`;
