import { useState, useEffect } from 'react';

import AvatarInput from '../../../shared/AvatarInput';
import FollowButton from '../../../shared/FollowButton';
import UnfollowButton from '../../../shared/UnfollowButton';

import * as S from './styles';

const Info = ({ profile, userLogged }) => {
  const [follow, setFollow] = useState(false);
  const [hideFollowBtn] = useState(() => {
    return profile.username === userLogged.username;
  });

  useEffect(() => {
    const followersArr = profile.followedBy.map((u) => u.id);
    setFollow(followersArr.includes(userLogged.id));
  }, [profile, userLogged]);

  return (
    <S.Profile>
      <AvatarInput profile={profile} />
      <S.ProfileInfo>
        <S.ProfileInfoHeader>
          <h2>{profile.username}</h2>
          {!hideFollowBtn ? (
            !follow ? (
              <FollowButton user={profile} />
            ) : (
              <UnfollowButton user={profile} />
            )
          ) : null}
        </S.ProfileInfoHeader>

        <S.ProfileInfoStats>
          <div>
            <strong>2</strong>
            <span>posts</span>
          </div>
          <div>
            <strong>{profile.followedBy.length}</strong>
            <span>followers</span>
          </div>
          <div>
            <strong>{profile.following.length}</strong>
            <span>following</span>
          </div>
        </S.ProfileInfoStats>
      </S.ProfileInfo>
    </S.Profile>
  );
};

export default Info;
