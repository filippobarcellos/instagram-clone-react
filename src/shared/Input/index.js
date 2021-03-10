import { forwardRef } from 'react';

import * as S from './styles';

const Input = forwardRef((props, ref) => {
  if (props.label) {
    return (
      <S.Label>
        <div>{props.label}</div>
        <input {...props} ref={ref} />
      </S.Label>
    );
  }

  return <input {...props} ref={ref} />;
});

export default Input;
