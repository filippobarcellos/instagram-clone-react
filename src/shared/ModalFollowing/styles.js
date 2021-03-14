import styled from 'styled-components';

export const Content = styled.div`
  width: 400px;
  height: 100%;

  header {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #dbdbdb;

    strong {
      font-size: 18px;
    }

    svg {
      margin-left: auto;
    }
  }

  ul {
    padding: 16px;
  }

  li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 16px;
    }

    div {
      display: flex;
      flex-direction: column;

      strong {
        margin-bottom: 2px;
      }

      span {
        color: #dbdbdb;
      }
    }

    img {
      width: 30px;
      border-radius: 50%;
      margin-right: 16px;
    }

    button {
      margin-left: auto;
    }
  }
`;
