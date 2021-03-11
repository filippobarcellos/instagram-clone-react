import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useCreateUser from '../../hooks/useCreateUser';

import Logo from '../../shared/Logo';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Spinner from '../../shared/Spinner';

import * as S from './styles';

const Signup = () => {
  const history = useHistory();
  const { mutateAsync } = useCreateUser();

  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      await mutateAsync(data);
      toast.success('User has been created. You can now login.', {
        position: 'top-center',
        autoClose: 3000,
      });

      history.push('/');
    } catch (error) {
      setError(error.message);
      reset();
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.RegisterBox>
          <S.Logo>
            <Logo />
          </S.Logo>

          <form onSubmit={handleSubmit(onSubmit)}>
            {error && <S.Error>{error}</S.Error>}

            <Input
              name="username"
              type="text"
              placeholder="Username"
              ref={register({ required: true })}
            />

            <Input
              name="fullName"
              type="text"
              placeholder="Full Name"
              ref={register({ required: true })}
            />

            <Input
              name="email"
              type="text"
              placeholder="Email"
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: true })}
            />

            <Button disabled={!isValid} type="submit" variant="primary">
              {isSubmitting ? <Spinner /> : 'Sign up'}
            </Button>
          </form>
        </S.RegisterBox>

        <S.LoginBox>
          <span>
            Have an account? <Link to="/">Log in</Link>
          </span>
        </S.LoginBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default Signup;
