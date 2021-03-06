import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProfile from '../../hooks/useProfile';
import { useAuth } from '../../context/useAuth';

import Header from '../../shared/Header';
import AvatarInput from '../../shared/AvatarInput';

import * as S from './styles';
import FollowButton from '../../shared/FollowButton';
import UnfollowButton from '../../shared/UnfollowButton';

const Profile = () => {
  const { user: userLogged } = useAuth();
  const { username } = useParams();
  const { data, status } = useProfile(username);
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      const followersArr = data.followedBy.map((u) => u.id);
      setFollow(followersArr.includes(userLogged.id));
    }
  }, [data, userLogged, status]);

  return (
    <>
      <Header />
      <S.Container>
        {status === 'loading' ? (
          <span>Loading...</span>
        ) : (
          <S.Profile>
            <AvatarInput profile={data} />
            <S.ProfileInfo>
              <S.ProfileInfoHeader>
                <h2>{data.username}</h2>
                {!follow ? (
                  <FollowButton user={data} />
                ) : (
                  <UnfollowButton user={data} />
                )}
              </S.ProfileInfoHeader>

              <S.ProfileInfoStats>
                <div>
                  <strong>2</strong>
                  <span>posts</span>
                </div>
                <div>
                  <strong>{data.followedBy.length}</strong>
                  <span>followers</span>
                </div>
                <div>
                  <strong>{data.following.length}</strong>
                  <span>following</span>
                </div>
              </S.ProfileInfoStats>
            </S.ProfileInfo>
          </S.Profile>
        )}
      </S.Container>
    </>
  );
};

export default Profile;
