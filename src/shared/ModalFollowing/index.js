import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

import Modal from '../Modal';

import * as S from './styles';

const ModalFollowing = forwardRef((props, ref) => {
  return (
    <Modal ref={ref}>
      <S.Content>
        <header>
          <strong>Following</strong>
          <GrClose size={18} onClick={() => ref.current.close()} />
        </header>
        <ul>
          {props.profiles.map((user) => (
            <li key={user.id}>
              <img
                src={
                  user.image
                    ? user.image
                    : `https://eu.ui-avatars.com/api/?name=${user.username}`
                }
                alt={user.username}
              />
              <div>
                <Link to={`/${user.username}`}>
                  <strong>{user.username}</strong>
                </Link>
                <span>{user.fullName}</span>
              </div>
            </li>
          ))}
        </ul>
      </S.Content>
    </Modal>
  );
});

export default ModalFollowing;
