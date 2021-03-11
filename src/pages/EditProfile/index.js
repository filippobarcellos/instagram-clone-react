import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/useAuth';

import DefaultLayout from '../_layouts/Default';
import AvatarInput from '../../shared/AvatarInput';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

import * as S from './styles';

const EditProfile = () => {
  const { user, updateUser } = useAuth();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: user.username,
      fullName: user.fullName,
      bio: user.bio,
    },
  });

  const onSubmit = async (data) => {
    try {
      await updateUser(data);
      toast.success('Your profile has been updated', {
        position: 'top-center',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('Something went wrong. Please retry.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <DefaultLayout>
      <S.Container>
        <div>
          <S.Header>
            <AvatarInput profile={user} />
            <h2>{user.username}</h2>
          </S.Header>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Full Name"
              name="fullName"
              ref={register}
            />

            <Input
              type="text"
              label="Username"
              name="username"
              ref={register}
            />

            <Input type="text" label="Bio" name="bio" ref={register} />

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
