import { useParams } from 'react-router-dom';
import { Instagram } from 'react-content-loader';
import { useAuth } from '../../context/useAuth';
import useProfile from '../../hooks/useProfile';

import DefaultLayout from '../_layouts/Default';
import Info from './Info';
import Photos from './Photos';

import * as S from './styles';

const Profile = () => {
  const { user: userLogged } = useAuth();
  const { username } = useParams();
  const { data, status } = useProfile(username);

  return (
    <DefaultLayout>
      <S.Container>
        {status === 'loading' ? (
          <Instagram />
        ) : (
          <>
            <Info profile={data} userLogged={userLogged} />
            <Photos posts={data.posts} />
          </>
        )}
      </S.Container>
    </DefaultLayout>
  );
};

export default Profile;
