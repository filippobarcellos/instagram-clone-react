import { useState, useEffect, useRef } from 'react';

import Buttons from './Buttons';
import AvatarInput from '../../../shared/AvatarInput';
import ModalFollowing from '../../../shared/ModalFollowing';
import ModalFollowers from '../../../shared/ModalFollowers';

import * as S from './styles';

const Info = ({ profile, userLogged }) => {
  const followingModal = useRef(null);
  const followersModal = useRef(null);

  const [follow, setFollow] = useState(false);

  useEffect(() => {
    const followersArr = profile.followedBy.map((u) => u.id);
    setFollow(followersArr.includes(userLogged.id));
  }, [profile, userLogged]);

  const handleClickFollowing = () => {
    if (profile.following.length > 0) {
      followingModal.current.open();
    }
  };

  const handleClickFollowers = () => {
    if (profile.followedBy.length > 0) {
      followersModal.current.open();
    }
  };

  return (
    <>
      <S.Profile>
        <AvatarInput profile={profile} />
        <S.ProfileInfo>
          <S.ProfileInfoHeader>
            <h2>{profile.username}</h2>

            <Buttons alreadyFollowing={follow} profile={profile} />
          </S.ProfileInfoHeader>

          <S.ProfileInfoStats>
            <div>
              <strong>{profile.posts.length}</strong>
              <span>posts</span>
            </div>
            <div>
              <button onClick={() => handleClickFollowers()}>
                <strong>{profile.followedBy.length}</strong>
                <span>followers</span>
              </button>
            </div>
            <div>
              <button onClick={() => handleClickFollowing()}>
                <strong>{profile.following.length}</strong>
                <span>following</span>
              </button>
            </div>
          </S.ProfileInfoStats>
        </S.ProfileInfo>
      </S.Profile>

      <ModalFollowing ref={followingModal} profiles={profile.following} />
      <ModalFollowers ref={followersModal} profiles={profile.followedBy} />
    </>
  );
};

export default Info;
