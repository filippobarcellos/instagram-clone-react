import Button from '../../Button';

import * as S from './styles';

const Suggestions = () => {
  return (
    <S.Container>
      <strong>Suggestions For You</strong>
      <S.List>
        <li>
          <img
            src="https://eu.ui-avatars.com/api/?name=filippo+b"
            alt="Filippo"
          />
          <strong>filippob</strong>
          <Button type="button" variant="secondary">
            Follow
          </Button>
        </li>
        <li>
          <img
            src="https://eu.ui-avatars.com/api/?name=filippo+b"
            alt="Filippo"
          />
          <strong>filippob</strong>
          <Button type="button" variant="secondary">
            Follow
          </Button>
        </li>
        <li>
          <img
            src="https://eu.ui-avatars.com/api/?name=filippo+b"
            alt="Filippo"
          />
          <strong>filippob</strong>
          <Button type="button" variant="secondary">
            Follow
          </Button>
        </li>
      </S.List>
    </S.Container>
  );
};

export default Suggestions;
