import { Link } from 'react-router-dom';
import { BulletList } from 'react-content-loader';

import useProfiles from '../../../hooks/useProfiles';
import useFollowUser from '../../../hooks/useFollowUser';

import Button from '../../Button';

import * as S from './styles';

const Suggestions = () => {
  const { status, data } = useProfiles();

  const { mutate: followUser } = useFollowUser();

  return (
    <S.Container>
      <strong>Suggestions For You</strong>
      {status === 'loading' && <BulletList />}
      {status === 'error' && <span>Something wrong happenned.</span>}

      <S.List>
        {data?.length === 0 && <p>There are no more users to follow.</p>}
        {data?.map((user) => (
          <li key={user.id}>
            <Link to={`/${user.username}`}>
              <img
                src={
                  user.image
                    ? `user.image`
                    : `https://eu.ui-avatars.com/api/?name=${user.username}`
                }
                alt={user.username}
              />
              <strong>{user.username.toLowerCase()}</strong>
            </Link>
            <Button
              type="button"
              variant="secondary"
              onClick={() => followUser(user)}
            >
              Follow
            </Button>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Suggestions;
