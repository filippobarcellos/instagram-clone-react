import { FiInstagram, FiHome, FiLogOut } from 'react-icons/fi';

import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <FiInstagram size={26} />

        <S.Widgets>
          <FiHome size={22} />
          <FiLogOut size={22} />
        </S.Widgets>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
