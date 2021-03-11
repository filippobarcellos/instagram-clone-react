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
  height: 193px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 900px) {
    height: 293px;
  }

  > a {
    position: absolute;
    color: #fff;
    display: none;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;

    div {
      display: flex;
      align-items: center;
      margin: 0 auto;

      span {
        display: flex;
        align-items: center;

        p {
          margin-left: 8px;
        }

        & + span {
          margin-left: 30px;
        }
      }
    }
  }

  &:hover {
    > a {
      display: flex;
    }
  }
`;
