import styled from 'styled-components';

export const Content = styled.main`
  width: 90%;
  max-width: 975px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-top: 40px;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
    grid-gap: 40px;
  }
`;
