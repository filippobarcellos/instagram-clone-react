import { useState } from 'react';
import { useAuth } from '../../context/useAuth';
import api from '../../services/api';

import * as S from './styles';

const AvatarInput = ({ profile }) => {
  const { user: userLogged, updateUserStorage } = useAuth();
  const [preview, setPreview] = useState();

  const handleAvatarChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));

    const data = new FormData();
    data.append('image', e.target.files[0]);

    api
      .patch('users/avatar', data)
      .then((response) => updateUserStorage(response.data));
  };

  return (
    <S.Container>
      <label htmlFor="avatar">
        <img
          src={
            !profile.image
              ? `https://eu.ui-avatars.com/api/?name=${profile.username}`
              : preview !== undefined
              ? preview
              : profile.image
          }
          alt={profile.username}
        />

        <input
          type="file"
          id="avatar"
          disabled={profile.id !== userLogged.id}
          onChange={handleAvatarChange}
        />
      </label>
    </S.Container>
  );
};

export default AvatarInput;
