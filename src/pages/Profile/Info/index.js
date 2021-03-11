import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AvatarInput from '../../../shared/AvatarInput';
import FollowButton from '../../../shared/FollowButton';
import UnfollowButton from '../../../shared/UnfollowButton';

import * as S from './styles';
import Button from '../../../shared/Button';

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
          ) : (
            <>
              <Button
                type="button"
                style={{ border: '1px solid #DBDBDB', marginRight: '16px' }}
              >
                <Link to="/account/edit">Edit Profile</Link>
              </Button>

              <Button type="button" variant="primary">
                <Link to="/account/create">Share a Photo</Link>
              </Button>
            </>
          )}
        </S.ProfileInfoHeader>

        <S.ProfileInfoStats>
          <div>
            <strong>{profile.posts.length}</strong>
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
