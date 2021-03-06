import { forwardRef } from 'react';
import * as S from './styles';

const Input = forwardRef((props, ref) => {
  return (
    <S.Container noBorder={props.noBorder}>
      <input {...props} ref={ref} />
    </S.Container>
  );
});

export default Input;
