import { useState } from 'react';
import { useAuth } from '../../context/useAuth';
import useFollowUser from '../../hooks/useFollowUser';

import Button from '../Button';
import Spinner from '../Spinner';

import * as S from './styles';

const FollowButton = ({ user }) => {
  const { user: userLogged } = useAuth();

  // const [isProfileLogged] = useState(() =>
  //   user.id === userLogged.id ? true : false
  // );

  // const [alreadyFollow] = useState(() => {
  //   const followersArr = user.followedBy.map((u) => u.id);
  //   return followersArr.includes(userLogged.id);
  // });

  const { mutate: followUser, isLoading } = useFollowUser();

  return (
    <Button type="button" variant="primary" onClick={() => followUser(user)}>
      {isLoading ? <Spinner /> : 'Follow'}
    </Button>
  );
};

export default FollowButton;
