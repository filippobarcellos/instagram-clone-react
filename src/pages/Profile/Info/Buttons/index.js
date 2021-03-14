import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../../../context/useAuth';

import Button from '../../../../shared/Button';
import FollowButton from '../../../../shared/FollowButton';
import UnfollowButton from '../../../../shared/UnfollowButton';

const Buttons = ({ alreadyFollowing, profile }) => {
  const [isUserLogged, setIsUserLogged] = useState(true);
  const { username } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    if (user.username === username) {
      setIsUserLogged(true);
    } else {
      setIsUserLogged(false);
    }
  }, [user.username, username]);

  return isUserLogged ? (
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
  ) : alreadyFollowing ? (
    <UnfollowButton user={profile} />
  ) : (
    <FollowButton user={profile} />
  );
};

export default Buttons;
