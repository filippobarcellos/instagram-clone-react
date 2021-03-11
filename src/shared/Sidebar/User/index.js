import { useAuth } from '../../../context/useAuth';

import * as S from './styles';

const User = () => {
  const { user } = useAuth();

  return (
    <S.Container>
      <img
        src={
          user.image
            ? `https://instagram-clone-prisma-api.herokuapp.com/files/${user.image}`
            : `https://eu.ui-avatars.com/api/?name=${user.username}`
        }
        alt={user.username}
      />
      <div>
        <strong>{user.username.toLowerCase()}</strong>
        <span>{user.fullName}</span>
      </div>
    </S.Container>
  );
};

export default User;
