import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  height: 156px;

  > strong {
    color: var(--textGray);
    margin-bottom: 40px;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  width: 100%;

  li {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
    }

    & + li {
      margin-top: 12px;
    }

    img {
      width: 30px;
      border-radius: 50%;
    }

    strong {
      margin-left: 16px;
    }

    button {
      margin-left: auto;
    }
  }
`;
