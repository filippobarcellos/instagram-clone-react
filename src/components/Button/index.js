import * as S from './styles';

function Button({ children, ...props }) {
  return <S.Button {...props}>{children}</S.Button>;
}

export default Button;
