import useUnfollowUser from '../../hooks/useUnfollowUser';

import Button from '../Button';
import Spinner from '../Spinner';

const UnfollowButton = ({ user }) => {
  const { mutate, isLoading } = useUnfollowUser();

  return (
    <Button type="button" variant="primary" onClick={() => mutate(user)}>
      {isLoading ? <Spinner /> : 'Unfollow'}
    </Button>
  );
};

export default UnfollowButton;
