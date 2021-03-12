import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray);
  border-radius: 4px;
  background: var(--white);

  & + div {
    margin-top: 24px;
  }

  header {
    padding: 16px;

    a {
      display: flex;
      align-items: center;
    }

    img {
      width: 32px;
      border-radius: 50%;
      margin-right: 16px;
    }
  }

  @media (min-width: 900px) {
    ${(props) =>
      props.fullStyle &&
      css`
        margin-top: 80px;
        flex-direction: row;

        header {
          display: none;
        }
      `}
  }
`;

export const ArticlePhoto = styled.div`
  max-width: 765px;
  flex: 3;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ArticleInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const ArticleWidgets = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 6px;
  }
`;

export const ArticleDescription = styled.div`
  padding: 8px 16px;

  strong {
    margin-right: 8px;
  }
`;

export const Hour = styled.div`
  padding: 8px 16px;

  span {
    font-size: 12px;
    color: var(--text);
  }
`;

export const ArticleComments = styled.div`
  flex: 1;
`;

export const ArticleAddComment = styled.div``;
