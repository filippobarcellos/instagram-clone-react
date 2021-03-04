import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/useAuth';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';

import * as S from './styles';

const Login = () => {
  const { login } = useAuth();
  const history = useHistory();

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
      await login(data);
      history.push('/feed');
    } catch (error) {
      setError(error.message);
      reset();
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.LoginBox>
          <S.Logo>
            <Logo />
          </S.Logo>
          <form onSubmit={handleSubmit(onSubmit)}>
            {error && <S.Error>{error}</S.Error>}

            <Input
              aria-label="Enter your email"
              type="text"
              name="email"
              placeholder="Email"
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <Input
              aria-label="Enter your password"
              type="password"
              name="password"
              placeholder="Password"
              ref={register({ required: true })}
            />
            <Button disabled={!isValid} type="submit">
              {isSubmitting ? <Spinner /> : 'Log in'}
            </Button>
          </form>
        </S.LoginBox>

        <S.RegisterBox>
          <span>
            Don't have an account? <Link to="/account/signup">Sign up</Link>
          </span>
        </S.RegisterBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
