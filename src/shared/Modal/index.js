import {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

import * as S from './styles';

const portalRoot = document.getElementById('portal');

const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalNode = useRef();

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    []
  );

  const handleClickOutsideModal = useCallback((e) => {
    if (!(modalNode.current && modalNode.current.contains(e.target))) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutsideModal);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    }

    return () =>
      document.removeEventListener('mousedown', handleClickOutsideModal);
  }, [isOpen, handleClickOutsideModal]);

  return createPortal(
    isOpen ? (
      <S.Wrapper>
        <S.Content ref={modalNode}>{props.children}</S.Content>
      </S.Wrapper>
    ) : null,
    portalRoot
  );
});

export default Modal;
