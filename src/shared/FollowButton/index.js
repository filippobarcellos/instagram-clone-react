import useFollowUser from '../../hooks/useFollowUser';

import Button from '../Button';
import Spinner from '../Spinner';

const FollowButton = ({ user }) => {
  const { mutate: followUser, isLoading } = useFollowUser();

  return (
    <Button type="button" variant="primary" onClick={() => followUser(user)}>
      {isLoading ? <Spinner /> : 'Follow'}
    </Button>
  );
};

export default FollowButton;
