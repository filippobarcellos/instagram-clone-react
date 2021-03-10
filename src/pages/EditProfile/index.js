import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/useAuth';

import DefaultLayout from '../_layouts/Default';
import AvatarInput from '../../shared/AvatarInput';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

import * as S from './styles';

const EditProfile = () => {
  const { user } = useAuth();

  return (
    <DefaultLayout>
      <S.Container>
        <div>
          <S.Header>
            <AvatarInput profile={user} />
            <h2>{user.username}</h2>
          </S.Header>

          <S.Form>
            <Input type="text" label="Full Name" />

            <Input type="text" label="Username" />

            <Input type="text" label="Bio" />

            <Button type="submit" variant="primary">
              Update Profile
            </Button>
          </S.Form>
        </div>
      </S.Container>
    </DefaultLayout>
  );
};

export default EditProfile;
