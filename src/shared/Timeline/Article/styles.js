import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  border: 1px solid var(--gray);

  & + article {
    margin-top: 40px;
  }

  header {
    padding: 16px;
    display: flex;
    align-items: center;

    img {
      width: 32px;
      border-radius: 50%;
      margin-right: 16px;
    }
  }
`;

export const ArticlePhoto = styled.div`
  display: flex;
  max-height: 765px;

  img {
    max-width: 100%;
  }
`;

export const Widgets = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 8px;
  }
`;

export const Description = styled.div`
  padding: 0 16px;

  strong {
    margin-right: 8px;
  }
`;

export const Hour = styled.div`
  padding: 8px 16px;
  font-size: 14px;
`;

export const Comments = styled.div``;

export const AddComment = styled.div`
  padding: 16px;
  border-top: 1px solid var(--gray);

  form {
    display: flex;
    align-items: center;
    width: 100%;

    div {
      flex: 1;
    }
  }
`;
