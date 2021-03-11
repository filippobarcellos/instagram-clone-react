import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useCreatePhoto from '../../hooks/useCreatePhoto';

import DefaultLayout from '../_layouts/Default';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Spinner from '../../shared/Spinner';

import * as S from './styles';

const CreatePhoto = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const { mutateAsync } = useCreatePhoto();

  const onSubmit = async (data) => {
    const newPhoto = new FormData();
    newPhoto.append('description', data.description);
    newPhoto.append('image', data.image[0]);

    try {
      await mutateAsync(newPhoto);
      history.goBack();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DefaultLayout>
      <S.Container>
        <div>
          <h2>Share your best moments.</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" ref={register} name="image" />
            <Input
              type="text"
              placeholder="Add a description"
              name="description"
              ref={register}
            />

            <Button type="submit" variant="primary">
              {isSubmitting ? <Spinner /> : 'Share you photo'}
            </Button>
          </form>
        </div>
      </S.Container>
    </DefaultLayout>
  );
};

export default CreatePhoto;
