import User from './User';
import Suggestions from './Suggestions';

import * as S from './styles';

const Sidebar = () => {
  return (
    <S.Container>
      <User />
      <Suggestions />
    </S.Container>
  );
};

export default Sidebar;
