import { useAuth } from '../../context/useAuth';
import { FiInstagram, FiHome, FiLogOut } from 'react-icons/fi';

import * as S from './styles';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <S.Header>
      <S.Wrapper>
        <FiInstagram size={26} />

        <S.Widgets>
          <button>
            <FiHome size={22} />
          </button>
          <button onClick={() => logout()}>
            <FiLogOut size={22} />
          </button>
          <button>
            <S.Avatar>
              <img
                src={
                  user.avatar
                    ? `http://localhost:3333/files${user.avatar}`
                    : `https://eu.ui-avatars.com/api/?name=${user.username}`
                }
                alt={user.username}
              />
            </S.Avatar>
          </button>
        </S.Widgets>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
