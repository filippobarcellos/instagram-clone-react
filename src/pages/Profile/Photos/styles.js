//220 293
import styled from 'styled-components';

export const PhotosList = styled.div`
  max-width: 967px;
  display: grid;
  grid-template-columns: repeat(3, minmax(159px, 1fr));
  grid-gap: 20px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--gray);
`;

export const Photo = styled.div`
  min-height: 159px;
  background: red;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 900px) {
    min-height: 309px;
  }
`;
