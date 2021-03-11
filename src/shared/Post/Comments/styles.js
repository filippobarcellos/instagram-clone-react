import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px 16px;
`;

export const Comment = styled.div`
  & + div {
    margin-top: 8px;
  }

  > span {
    margin-left: 8px;
  }
`;
