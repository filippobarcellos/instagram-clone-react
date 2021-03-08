import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { FiInstagram, FiHome, FiLogOut } from 'react-icons/fi';

import * as S from './styles';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/feed">
          <FiInstagram size={26} />
        </Link>

        <S.Widgets>
          <button>
            <FiHome size={22} />
          </button>
          <button onClick={() => logout()}>
            <FiLogOut size={22} />
          </button>
          <button>
            <S.Avatar>
              <Link to={`/${user.username}`}>
                <img
                  src={
                    user.image
                      ? `http://localhost:3333/files/${user.image}`
                      : `https://eu.ui-avatars.com/api/?name=${user.username}`
                  }
                  alt={user.username}
                />
              </Link>
            </S.Avatar>
          </button>
        </S.Widgets>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;