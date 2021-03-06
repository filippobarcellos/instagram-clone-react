import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--white);
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--gray);
  position: fixed;
  top: 0;
`;

export const Wrapper = styled.div`
  width: 975px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Widgets = styled.div`
  button {
    & + button {
      margin-left: 16px;
    }
  }
`;

export const Avatar = styled.div`
  img {
    width: 24px;
    border-radius: 50%;
  }
`;
