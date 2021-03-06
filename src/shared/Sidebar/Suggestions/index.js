import { Link } from 'react-router-dom';
import { BulletList } from 'react-content-loader';
import useProfiles from '../../../hooks/useProfiles';

import Button from '../../Button';

import * as S from './styles';

const Suggestions = () => {
  const { status, data, error } = useProfiles();

  return (
    <S.Container>
      <strong>Suggestions For You</strong>
      {status === 'loading' && <BulletList />}
      {status === 'error' && <span>Something wrong happenned.</span>}

      <S.List>
        {data?.map((user) => (
          <li key={user.id}>
            <Link to={`/${user.username}`}>
              <img
                src={
                  user.avatar
                    ? `http://localhost:3333/files${user.avatar}`
                    : `https://eu.ui-avatars.com/api/?name=${user.username}`
                }
                alt={user.username}
              />
              <strong>{user.username.toLowerCase()}</strong>
            </Link>
            <Button type="button" variant="secondary">
              Follow
            </Button>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Suggestions;
